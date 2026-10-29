param(
    [string]$Sdk = 'D:\ClaudeWorkspace\Apps\AndroidSDK',
    [string]$Jdk = 'D:\ClaudeWorkspace\Apps\Java\jdk17',
    [string]$Output = 'D:\ClaudeWorkspace\Output\KaoyanMath1-Polish-20261029\artifacts\KaoyanMath1-Android.apk'
)
$ErrorActionPreference = 'Stop'
$env:JAVA_HOME = $Jdk
$env:Path = "$Jdk\bin;$env:Path"
$env:TEMP = 'D:\ClaudeWorkspace\Temp'
$env:TMP = $env:TEMP
$stage = Join-Path $env:TEMP ('KaoyanAndroid\build-' + [guid]::NewGuid().ToString('N'))
$tools = Join-Path $Sdk 'build-tools\35.0.0'
$androidJar = Join-Path $Sdk 'platforms\android-35\android.jar'
$key = 'D:\ClaudeWorkspace\Caches\Android\kaoyan-debug.jks'
New-Item -ItemType Directory -Force -Path $stage, "$stage\bundle\assets", "$stage\classes", "$stage\dex", "$stage\gen", (Split-Path $Output), (Split-Path $key) | Out-Null

function Check-Exit([string]$step) {
    if ($LASTEXITCODE -ne 0) { throw "$step failed with exit code $LASTEXITCODE" }
}

node "$PSScriptRoot\prepare.mjs" "$stage\bundle\assets"
Check-Exit 'Prepare assets'
node "$PSScriptRoot\verify-adapter.mjs"
Check-Exit 'Verify Android adapter'
& "$tools\aapt2.exe" compile --dir "$PSScriptRoot\res" -o "$stage\compiled.zip"
Check-Exit 'Compile Android resources'
& "$tools\aapt2.exe" link -o "$stage\base.apk" -I $androidJar --manifest "$PSScriptRoot\AndroidManifest.xml" --java "$stage\gen" "$stage\compiled.zip"
Check-Exit 'Link Android resources'
& "$Jdk\bin\javac.exe" -encoding UTF-8 --release 8 -classpath $androidJar -d "$stage\classes" "$PSScriptRoot\src\com\kaoyan\mathone\MainActivity.java" "$stage\gen\com\kaoyan\mathone\R.java"
Check-Exit 'Compile Java'
$classes = @(Get-ChildItem "$stage\classes" -Recurse -Filter '*.class' | ForEach-Object { $_.FullName })
& "$tools\d8.bat" --min-api 26 --lib $androidJar --output "$stage\dex" $classes
Check-Exit 'Build DEX'
& "$Jdk\bin\jar.exe" uf "$stage\base.apk" -C "$stage\bundle" assets -C "$stage\dex" classes.dex
Check-Exit 'Add assets and DEX'
node "$PSScriptRoot\verify-apk.mjs" "$stage\base.apk"
Check-Exit 'Verify asset paths'
& "$tools\zipalign.exe" -f -p 4 "$stage\base.apk" "$stage\aligned.apk"
Check-Exit 'Align APK'
if (!(Test-Path $key)) {
    & "$Jdk\bin\keytool.exe" -genkeypair -keystore $key -storepass android -keypass android -alias androiddebugkey -dname 'CN=Android Debug,O=Local,C=CN' -keyalg RSA -keysize 2048 -validity 10000
    Check-Exit 'Create local signing key'
}
& "$tools\apksigner.bat" sign --ks $key --ks-pass pass:android --key-pass pass:android --out $Output "$stage\aligned.apk"
Check-Exit 'Sign APK'
& "$tools\apksigner.bat" verify --verbose --print-certs $Output
Check-Exit 'Verify APK signature'
& "$tools\zipalign.exe" -c -p 4 $Output
Check-Exit 'Verify APK alignment'
Write-Host "APK ready: $Output"
