@echo off

:: get path of this script, where it is and enter it
cd /d %~dp0
set "currDir=%CD%"

:: Other Proportional Resolutions:
:: Width	Height
:: 1180	800
:: 1328	900
:: 1475	1000
:: 1623	1100
:: 1770	1200
:: 1918	1300
:: 2000	1356
:: Each step increases the resolution proportionally while keeping the same aspect ratio (1.475)

set "X=1770"
set "Y=1200"
set "XY=%X%x%Y%"

mkdir "%XY%" 2>nul
for %%i in (*.png) do "C:\Projectos\ProjectosQA\portables\ffmpeg\bin\ffmpeg.exe" -i "%%i" -vf "scale=%X%:%Y%" "%XY%\%%i"
