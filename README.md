# Flutter Web Test Automation Framework

## 📝 Overview

**Goal**: Challenge to develop a framework to test a Flutter web application  
**Date**: 2025-02-01  
**Author**: Hugo Lourenço

---

## 📌 Table of Contents

1. [Introduction](#introduction)
2. [Known challenges](#known-challenges)
3. [Initial start with Flutter](#initial-start-with-flutter)
4. [Uncover proper approach to Flutter Web](#uncover-proper-approach-to-flutter-web)
5. [Automation Framework Design](#automation-framework-design)
6. [Framework dependencies and libraries](#framework-dependencies-and-libraries)
7. [Framework structure and implementation](#framework-structure-and-implementation)
8. [Setup](#setup)
9. [Test cases and BDD analysis](#test-cases-and-bdd-analysis)
10. [Project File Structure and Folder Tree](#project-file-structure-and-folder-tree)
11. [FAQ](#faq)
12. [References](#references)

---

## Introduction

This project is a **test automation framework** that I designed for a **Flutter-based web application**.

The framework is built with a focus on **code quality, maintainability, and best automation practices** rather than pure
test coverage.

It tries to ensure a structured approach to **web UI testing** by leveraging modern automation tools and adhering to
industry standards.

That said, **time was a limiting factor**, so I could not finish the project as I would like to.

Okay, so let's get into the automation framework goals:

- Provide a **scalable and maintainable** structure using the **Page Object Model (POM)** or an equivalent pattern.
- Support **Flutter Web applications** by handling elements rendered under `flt-glass-pane`.
- Offer **detailed logging** and **comprehensive reporting** for test execution results.
- Enable **test execution with configurable options**, allowing easy setup and execution.
- Allow for **extension and future scalability** to accommodate additional test cases and functionalities.

> Again, within the time limitations, I could not cover all the scenarios I wanted to.
> But I did my best to create a solid foundation for future improvements.

> This document serves as a **guide** to setting up, executing, and understanding the design choices behind the
> framework. It also details the **scope of automation**, explaining the covered and excluded scenarios with
> justifications.

## Known challenges

The goal of design a test framework to a **Flutter-based web application** is quite demanding and with limited support.

Bellow are some of the points I had to deal with

## Initial start with Flutter

- It uses CanvasKit

- CanvasKit elements cannot be located directly

- They are rendered under a canvas element under `flt-glass-pane`.

As an initial approach I tried **Appium Flutter Driver**. Could it be a good choice for Flutter **Web** automation?

Unfortunately no! **Appium Flutter Driver** joined with any other WebdriverIO, Playwright or Selenium will fail to
locate elements rendered under `flt-glass-pane`.

- 🔴 Appium cannot inject into a Flutter Web app because there are no native accessibility nodes exposed.
- 🔴 It does not support Flutter Web, even if CanvasKit is enabled and renders as a single canvas element.
- 🔴 CanvasKit render in Flutter Web uses canvas element, and typical DOM interaction (like find.byValueKey) don't work
  directly on it.
- 🔴 Appium Flutter Driver does not work for testing a Flutter Web (CanvasKit) app accessed via a URL.
- ✅ Appium Flutter Driver is meant for mobile, not web. Is designed to automate Flutter mobile applications (
  Android/iOS)

## Back to start, had to find another way

I had to fall back to Playwright or Selenium with ChromeDriver to automate the Flutter Web application and:

- ✅ Use Playwright, Selenium, or Appium with ChromeDriver instead.

## Uncover proper approach to Flutter Web

Now, this is the approach I, took and of course new challenges came up as expected.

After intensive work and research, I found ways to interact with the Flutter Web application.

So, for interaction, I should either:

- ✅ Simulate clicks at specific coordinates inside the canvas element.
- 🔴 Interact with controls that are outside the canvas, if they exist.
- ✅ Use accessibility features if supported.
- ✅ Use pixel-based testing to compare images and detect changes in the UI.
- 🔴 OCR (Optical Character Recognition) to detect text/images and automate actions accordingly.
- 🔴 Use AI/ML-based image recognition to identify elements and automate actions.
- ✅ Use a combination of the above methods to interact with the application.

🚀 That was it! I had to use a combination of these methods to interact with the Flutter Web application

## Automation Framework Design

Now, development in progress, it's time to describe my option to use Playwright and Node.js.
I could use Selenium or another, yes.

Here some reasons why (tech and non-tech, :D):

- ✅ Playwright, I am getting deeper into it, and I am really enjoying it, this was the choice in the absence or
  requirements like extended features for example in Selenium when can also use Selenium grid, etc.
- ✅ Node.js, I find it personally as a RAD (rapid application development technology) and I am very quick when I develop
  with it.
- ✅ Node.js has plenty of libraries and tools that can be used to automate tasks and build applications, like the *
  *challenge itself suggested some**.
- ✅ Node.js uses JS, I really like it, and I am very comfortable with it. Yes, Java in too, could be...

## Framework dependencies and libraries

During the project, I had adopted libraries in Node.js after extensive research and testing:

- for image analysis and comparison, I used **pixelmatch**
- for image read/write I used **pngjs**
- for logging **Winston** (as suggested by the challenge)
- for reports **Allure** (as suggested by the challenge)

## Framework structure and implementation

And after this work and decisions, the implementation went by for a while.

And here is the result, in terms of the structure of the project and the implementation.

### **Extra features and custom implementations**

Besides what was requested in the challenge:

- ✅ The project implements a layer of Gherkin in human natural language, having a feature file in Cucumber linked to the
  code base.
- ✅ The project has Cucumber reports besides Allure
- ✅ The project has a custom screenshot comparison.
- ✅ The project has a custom image analysis and region difference detection to give coordinates, either to click, move
  or input.
- ✅ The project has a small baseline image collection to be used in the tests.
- ✅ The project has a custom support to several resolutions while keeping image ratio and reusing images (they are
  resized from the same initial size using a script presented in the baseline image folders).
- ✅ The project has a capture and image diff folders.
- ✅ The project has a custom script to resize images
- ✅ The project makes extensive use of accessibility features like TAB keys, ENTER keys, and ARROW keys.
- ✅ The project has custom results in JSON.
- ✅ The project has a custom metrics, keeps history in JSON.
- ✅ The project has a custom logger beside Winston.
- ✅ The project has a counter to create unique users whenever is run.
- ✅ The project has a YAML file to store credentials.

---

🚀 Of course, some topics are not easy to deal in such a small timeline, I believe I could do better with much time.

---

However, as much as possible I tried my best to cover all required topics, and hopefully some degree of good result in
terms of:

- ✅ Design to be maintainable and extensible.
- ✅ Scenarios well-defined and cover a wide range of cases and application functionality (to some degree).
- 🔴 Some scenarios are not implemented due to time constraints.
- ✅ The framework is built using modern tools and best practices.
- ✅ Code is well-documented and easy to understand.
- ✅ Easy to set up and run.
- ✅ The framework provides detailed logging and reporting.
- ✅ The framework is designed to be scalable and adaptable to future changes.

---

### 🚀 Summarizing the implementation

Basically the implementation consists in either:

- ✅ image comparison to assert we are at certain screen (the home screen is used as a reference)
- ✅ image analysis to detect differences in the application and find the different regions to interact with the
  application
- ✅ accessibility features to interact with the application, like key presses, etc.
- ✅ implementation is based on the idea of using a combination of the above methods to interact with the application.

### 🚀 Ideas and thoughts about the implementation

Sadly, I was out of time... to comply with you timeline, I had to cut some corners.

- I could have implemented more image analysis and comparison techniques.
- I could have implemented more advanced interaction methods like OCR, AI/ML, etc.
- I could have implemented better logging and reporting features.
- I could have implemented better metrics and analytics features.
- I could have implemented better error handling and recovery mechanisms.
- I could have implemented test data management and generation features.
- I could have implemented test environment management and configuration features.
- I could have implemented more advanced test result analysis and visualization features.
- I could have implemented test case management and tracking features.
- I could have implemented more test automation best practices and guidelines.
- I could have implemented more test automation tools and technologies.
- I could have implemented more test automation frameworks and libraries.
- I could have implemented more test automation design patterns and principles.
- Implement more scenarios and cover more functionalities.
- Implement GLOBAL custom locators and custom wait strategies.
- Implement GLOBAL helpers for managing TAB, Enter, etc.
- Implement other custom assertions and validations.

🚀 All the above are things that could be improved in the future

---

## Setup

⚙️ How to install and run the application locally.

### **1️⃣ Install Dependencies**

✅ You need latest Node.Js version, that's it!

All other dependencies are listed in the `package.json` file and extra dependencies like browser support is automatized
and run on post install.

Run the following usual npm command to install all of them, it will also post install browsers:

```sh
npm install
```

### **2️⃣ Run the Application**

Use this command as is to run a scenario that covers a complete flow, from logging in until play a game.

```sh
npx bddgen && npx playwright test application chromium --headed -g @current
```

Or change it into a specific tag to run a specific scenario or all scenarios.

Helper:

> npx bddgen && npx playwright test FEATURE_FILENAME chromium --headed -g @TAG_OF_THE_SCENARIO

Please change the Gherkin tags in the file application.feature to run a specific scenario or all scenarios.

> **Optional**: You can use a batch file available at the root at the project like the one bellow to run the tests for
> your comfort, by changing variables **scenarioTag** and **featureName** at the test setup block.

```powershell
@echo off
cd /d "%~dp0"
set "scenarioTag=current"
set "featureName=application"
set "currDir=%CD%"
npx bddgen && npx playwright test %featureName% chromium --headed -g @%scenarioTag%
cd %currDir%
pause

```

### **3️⃣ Reports**

Cucumber reports are automatically generated

Allure reports are not, you should use:

```sh
npx allure generate --clean allure-results
```

and after that, serve and open the report with:

```sh
npx allure open
```

> ❓ Doubts about report or log folders or files? Go to the final of this document and see the **tree structure** of the
> project.

---

## Test cases and BDD analysis

I have used the approach of creating a set of scenarios that are more likely to be used in the application.

Besides the basic scenarios, I have also created more advanced scenarios that are more dynamic and receive parameters.

✅ That's why a cucumber layer was created to facilitate the creation of the scenarios.

Also, I have created a set of scenarios that are not implemented due to the short time.


--- 
Initial feature created with basic scenarios
--- 

✅ Login

✅ Registration

| Login and registration scenarios  |
|-----------------------------------|
| <img src="readme/senarios-1.png"> |

--- 
Advanced dynamic scenarios receiving parameters.
--- 

✅ Select a sport

✅ Set up teams and players

✅ Set up skills

✅ Set up a game

✅ Play a game


Many combinations are possible
---
We can create them just by adding a new parameter line in the examples secction, increasing test coverage.

| Dynamic parametrized scenarios    |
|-----------------------------------|
| <img src="readme/senarios-2.png"> |

Sports
---

And with these, both sports and skills can be set up, and games can be played, using a simple implementation as bellow.

| Sports                                                            |
|-------------------------------------------------------------------|
| <img src="readme/dynamic-sport-selection-case-insensitive-2.png"> |
| <img src="readme/dynamic-sport-selection-case-insensitive.png">   |

Skills
---

| Skills                                                            |
|-------------------------------------------------------------------|
| <img src="readme/dynamic-skill-selection-case-insensitive-2.png"> |
| <img src="readme/dynamic-skill-selection-case-insensitive.png">   |

Not implemented scenarios
---
Also, these are important to refer, sadly, due to short time, they were written and defined but not implemented.

| Not implemented                   |
|-----------------------------------|
| <img src="readme/senarios-3.png"> |

Teaching, learning scenarios
---
These are fully working scenarios, experimental but working, still a work in progress.

They serve to teach the project with images to make full image navigation location based in image region.

PLEASE NOTICE THAT
> THEY ARE NOT CLEAN, OPTIMIZED OR FULLY IMPLEMENTED

| Teaching && full image navigation scenarios                                                                         |
|---------------------------------------------------------------------------------------------------------------------|
| <img src="readme/scenarios-for-work-in-progress-but-working-experimental-teach-mode-and-image-full-navigation.png"> |

| Implementation, not optimized, clean or otherwise                                                                     |
|-----------------------------------------------------------------------------------------------------------------------|
| <img src="readme/scenarios-for-work-in-progress-but-working-experimental-teach-mode-and-image-full-navigation-2.png"> |

Configurations
---

Maybe it's worth to mention also some Playwright, Allure and Winston configuration details:

Playwright
---

| Playwright                                                 | 
|------------------------------------------------------------|
| <img src="readme/framework-configuration-description.png"> |

Winston
---

| Winston                                                 |
|---------------------------------------------------------|
| <img src="readme/logger-configuration-description.png"> |

Allure
---

Specifically for Allure, I also implemented a script to generate the report and pull up Allure server to open report
page

This way it will keep all history of executions and results.

Please read the notes in every image.

| Specifically for Allure report generation and server         |
|--------------------------------------------------------------|
| <img src="readme/reports-allure-automation-description.png"> |

Custom metrics
---
JSON file and JS file to future feed any third party consumer.

| JSON                           |
|--------------------------------|
| <img src="readme/metrics.png"> |

YAML
---
For storing safely user credentials.

NOTE: it will only use the password, as initially the user is always changing on registration and when logging in it
will fetch for the last one created.

That's why, during development, I have created a counter to keep track of the last user created.

We don't need username anymore.

| YAML structure              |
|-----------------------------|
| <img src="readme/yaml.png"> |

YAML reader
---
For reading safely user credentials.

| Reader                              |
|-------------------------------------|
| <img src="readme/creds-reader.png"> |

Global constants
---
Some paths and global constants are defined in a file.

| globals.ts                     |
|--------------------------------|
| <img src="readme/globals.png"> |

Hooks
---
Hooks are managed in a custom way, so we can create our own metrics.

| Hooks                              |
|------------------------------------|
| <img src="readme/hooks-class.png"> |

Hooks for manage custom metrics
---
Hooks manage the metrics and this is how the metrics are created.

| Hooks                                |
|--------------------------------------|
| <img src="readme/hooks-class-2.png"> |

Final metrics are writen in JSON files
---
Hooks manage the metrics and this is how the metrics are created.

| Hooks                                                     |
|-----------------------------------------------------------|
| <img src="readme/generate-custom-metrics-and-report.png"> |

Resizing images for liquid/responsive layout
---
You can use this file and adopt one of the possible defined resolutions, while keeping image ratio.

NOTE: for this you should have ffmpeg installed in your machine.

| bmake_resized_images.bat             |
|--------------------------------------|
| <img src="readme/resize-images.png"> |

Image topics
---

Some information about folder structure and image topics.

See more at the chapter **Project Structure File and Folder Tree**

| Folder structure and details                   |
|------------------------------------------------|
| <img src="readme/image-brief-description.png"> |

Image analysis and comparison
---
Results of image comparison match (used to assert home page for example) and image region detection.

Image comparison match for home page full canvas screen

| Home canvas                          |
|--------------------------------------|
| <img src="readme/diff_homepage.png"> |

Image region detection
---
For sports "tennis" button

| Button "tennis" sub region                |
|-------------------------------------------|
| <img src="readme/diff_tennis_button.png"> |

Image comparison and detection
---
This was not easy to implement, but basically there are 2 methods available.

- 1 to compare 2 images and assert they are the same (within a maxPixelDiff threshold allowance)
- 2 to detect differences in the image and return the coordinates of the differences.

| Button "tennis" sub region                            |
|-------------------------------------------------------|
| <img src="readme/image-comparison-and-detection.png"> |

---
Canvas kit detection
---
In this case, accessing shadow root child elements to interact with the application.

| Button "tennis" sub region                  |
|---------------------------------------------|
| <img src="readme/canvas-kit-detection.png"> |

---

## Project File Structure and Folder Tree

A clean project structure ensures scalability and maintainability.

**Please read each comment to understand the purpose of each file and folder.**

```plaintext
|   bmake_ALLURE_REPORT.bat // USE IT TO GENERATE ALLURE REPORTS //
|   brun_challenge.bat // USE IT TO RUN THE CHALLENGE MAIN SCENARIO //
|   config_users.example.yaml
|   config_users.yaml // USE IT TO CREATE AND STORE YOUR OWN USER PASSWORDS //
|   package.json // DEPENDENCIES //
|   playwright.config.ts // PLAYWRIGHT CONFIGURATION //
|   README.md // THIS FILE //
|   tsconfig.json // TYPESCRIPT CONFIGURATION //
|   
+---.features-gen
|   \---features
|           application.feature.spec.js // FEATURE FILE GENERATED //
|           
+---allure-results // ALLURE RESULTS //
+---constants
|       globals.ts // GLOBAL CONSTANTS //
|       
+---counters
|       user_counter.db // COUNTER TO CREATE UNIQUE USERS //
|       
+---data
|   +---images
|   |   +---baseline // BASELINE IMAGES //
|   |   |   |   bmake_resized_images.bat // USE IT TO RESIZE IMAGES //
|   |   |   |   INFO.txt // INFO ABOUT IMAGES //
|   |   |   |   
|   |   |   \---1180x800 // RESIZED IMAGES //
|   |   |           baseline-skills-btn-desired-skills.png
|   |   |           baseline-skills-btn-next.png
|   |   |           baseline-skills-nr-equipas.png
|   |   |           baseline-skills-nr-jogadores.png
|   |   |           baseline-skills.png
|   |   |           baseline-sports-after-registration.png
|   |   |           baseline-sports-after-registration2.png
|   |   |           baseline-sports-futsal.png
|   |   |           baseline-sports-soccer.png
|   |   |           baseline-sports-tennis.png
|   |   |           baseline-sports.png
|   |   |           
|   |   +---capture // CAPTURED IMAGES //
|   |   |       PLACEHOLDER
|   |   |       
|   |   +---diffs // DIFFERENCES BETWEEEN IMAGES //
|   |   |       PLACEHOLDER
|   |   |       
|   |   +---diffs-to-locate-area // DIFFERENCES TO LOCATE AREAS //
|   |   |       PLACEHOLDER
|   |   |       
|   |   \---screenshots // TEST SCREENSHOTS //
|   |           PLACEHOLDER
|   |           
|   \---media
+---features
|       application.feature // FEATURE FILE //
|       
+---fixtures
|       steps_fixtures.ts // FIXTURES, REPLACED BY HOOKS FILE //
|       
+---helpers
|       AsciiHelper.ts // ASCII HELPER FOR CUSTOM LOGS //
|       DateHelper.ts // DATE HELPER //
|       FitGlassPaneHelper.ts // FIT GLASS PANE HELPER //
|       ImageHelper.ts // IMAGE HELPER // 
|       StorageHelper.ts // STORAGE HELPER, FOR USER UNIQUENESS //
|       
+---hooks
|       hooks_common.ts // COMMON HOOKS //
|       hooks_reports.ts // HOOKS TO CREATE CUSTOM METRICS //
|       
+---locators
|       locators.ts // LOCATORS, NOT USED THIS TIME //
|       
+---loggers
|       TestResult.ts // TEST RESULT METRICS LOGGER //
|       WinstonLogger.ts // WINSTON LOGGER //
|       
+---logs // WINSTON LOGS //
|       .f029a5c0d14affed087b1ba3e5767523bac01487-audit.json
|       2025-02-01-results.log
|       
+---managers
|       user_credentials_manager.ts // USER CREDENTIALS MANAGER //
|       
+---metrics
|   \---results
|       \---comuns
|           \---default
|                   metrics.js // METRICS //
|                   metrics.json // METRICS //
|                   
+---pages
|       BasePage.ts // BASE PAGE // 
|       GamePage.ts // GAME PAGE //
|       HomePage.ts // HOME PAGE //
|       LoginPage.ts // LOGIN PAGE //
|       PlayersPage.ts // PLAYERS PAGE //
|       RegistrationPage.ts // REGISTRATION PAGE //
|       SkillsPage.ts // SKILLS PAGE //
|       
+---readme // README IMAGES //
|       diff_homepage.png
|       diff_tennis_button.png
|       dynamic-skill-selection-case-insensitive-2.png
|       dynamic-skill-selection-case-insensitive.png
|       dynamic-sport-selection-case-insensitive-2.png
|       dynamic-sport-selection-case-insensitive.png
|       framework-configuration-description.png
|       logger-configuration-description-2.png
|       logger-configuration-description.png
|       metrics.png
|       reports-allure-automation-description.png
|       senarios-1.png
|       senarios-2.png
|       senarios-3.png
|       
+---reports
|   +---allure // ALLURE REPORTS //
|   \---cucumber // CUCUMBER REPORTS //
+---steps
|       steps_game.ts // STEPS GAME //
|       steps_home.ts // STEPS HOME //
|       steps_login.ts // STEPS LOGIN //
|       steps_players.ts // STEPS PLAYERS //
|       steps_registration.ts // STEPS REGISTRATION //
|       steps_skills.ts // STEPS SKILLS //
|       
+---test-results // PLAYWRIGHT TEST RESULTS // 
\---viewHolders
        vh_scenario.ts // VIEW HOLDER TO KEEP SCENARIO CONTEXT VARIABLES BETWEEEN STEPS // 

```

---

## FAQ

**❓ Q: How do I install dependencies or browsers?**  
A: Run `npm install`.

---

## References

- 📚 [Official Node.js Docs](https://nodejs.org/)
- 📚 [Official Playwright site](https://playwright.dev//)
- 📚 [Official Cucumber site](https://cucumber.io/)
- 📚 [Official Allure site](https://docs.qameta.io/allure/)
- 📚 [Official Appium Flutter Driver site](https://github.com/appium/appium-flutter-driver)
- 📚 [Official Appium Flutter Integration Driver site](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver)
- 📚 [Official Flutter Documentation site](https://docs.flutter.dev/cookbook/testing/integration/introduction)

---



