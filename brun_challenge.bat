@echo off

cd /d "%~dp0"

set "scenarioTag=current"
set "featureName=application"
set "currDir=%CD%"
set targetDir=
cd %targetDir%

:: echos
echo ---------------------------------
echo TEST RUNNER
echo ---------------------------------
echo current batch directory is %currDir%
echo current directory where the test is running, is %targetDir%
echo ---------------------------------
echo current scenarioTag is %scenarioTag%
echo current featureName is %featureName%
echo ----------------------------------------------

npx bddgen && npx playwright test %featureName% chromium --headed -g @%scenarioTag%
cd %currDir%
pause
