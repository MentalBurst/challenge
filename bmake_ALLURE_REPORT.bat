@echo off
setlocal enabledelayedexpansion

:: -------------------------------------------------------------------------
:: setup area
:: -------------------------------------------------------------------------

cd /d %~dp0

:: curr dir
set "currDir=%CD%"
set "REPORT_DIR=%CD%/reports/allure"
cd /d %currDir%
echo current directory is now %cd%

:: create new report directory
md "%REPORT_DIR%"
echo report created directory is "%REPORT_DIR%"

:: -------------------------------------------------------------------------
:: exec area
:: -------------------------------------------------------------------------


:: Generate Allure report in a new folder
call npx allure generate --clean allure-results --output "%REPORT_DIR%" || exit /b 1

:: Open the latest report
npx allure open "%REPORT_DIR%"

exit /b 0
