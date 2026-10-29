param([string]$Output = 'D:\ClaudeWorkspace\Output\KaoyanMath1-Polish-20261029\artifacts\KaoyanMath1-Windows.exe')
$ErrorActionPreference = 'Stop'
$compiler = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319\csc.exe'
if (!(Test-Path -LiteralPath $compiler)) { throw '.NET Framework C# compiler not found' }
New-Item -ItemType Directory -Force -Path (Split-Path $Output) | Out-Null
& $compiler /nologo /target:winexe /platform:anycpu /codepage:65001 /reference:System.Windows.Forms.dll /reference:System.Web.Extensions.dll "/out:$Output" "$PSScriptRoot\Launcher.cs"
if ($LASTEXITCODE -ne 0) { throw "Windows launcher compilation failed: $LASTEXITCODE" }
$check = Start-Process -FilePath $Output -ArgumentList '--self-test' -WindowStyle Hidden -Wait -PassThru
if ($check.ExitCode -ne 0) { throw "Windows launcher self-test failed: $($check.ExitCode)" }
Write-Host "Windows launcher ready: $Output"
$cloudOutput = Join-Path (Split-Path $Output) 'KaoyanMath1-Windows-Cloud.exe'
& $compiler /nologo /target:winexe /platform:anycpu /codepage:65001 /reference:System.Windows.Forms.dll "/out:$cloudOutput" "$PSScriptRoot\CloudLauncher.cs"
if ($LASTEXITCODE -ne 0) { throw "Cloud launcher compilation failed: $LASTEXITCODE" }
$cloudCheck = Start-Process -FilePath $cloudOutput -ArgumentList '--self-test' -WindowStyle Hidden -Wait -PassThru
if ($cloudCheck.ExitCode -ne 0) { throw "Cloud launcher self-test failed: $($cloudCheck.ExitCode)" }
Write-Host "Windows cloud launcher ready: $cloudOutput"
