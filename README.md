# Break IT - a playwright with javascript project

## Table of Contents
- [Introduction](#introduction)
- [Contributors](#contributors)
- [Project Description](#project-description)
- [Playwright and JavaScript](#playwright-and-javascript)
- [Page Object Model Pattern](#page-object-model-pattern)
- [GitHub Actions](#github-actions)

## Introduction
This is a project created by the members of Bug Hunter discord server. 
We estimate that our project will be done in about 2-3 months.

## Contributors
- [Andu Tutoveanu](https://github.com/AnduTutoveanu09)
- [Alex Stefan](https://github.com/AlexStefan17)
- [Levi Simon](https://github.com/simonleventeattila)
- [Radu Moldovan](https://github.com/RaduMoldovan30)
- [Iulian Neaga](https://github.com/Iulian99)
- [Andreea Hasel](https://github.com/AndreeaHasel)
- [Adrian Maciuc](https://github.com/adrianmaciuc)
- [Dan Popescu](https://github.com/PopDan23)
- [Ema Emese Egeto](https://github.com/emese85)
- [Claudiu Iacob](https://github.com/iclaudiu98)
- [Adrian Ciuciui](https://github.com/AdrianCiuciui)
- [Mirel P](https://github.com/pmirel)

## Project Description
The purpose of this project is to polish our quality assurance automation skills on [Playwright](https://playwright.dev/) and Javascript, as well as understanding and following best practices in workflows and coding.

## Playwright and JavaScript
This project utilizes [Playwright](https://playwright.dev/), a tool for automating browsers, written in JavaScript. It allows us to perform end-to-end testing, mimicking user interactions and validating the behavior of web applications.

## Page Object Model Pattern
We follow the Page Object Model [(POM)](https://playwright.dev/docs/pom) pattern to maintain our tests. POM helps in creating an abstraction of the UI elements, making tests more maintainable and reducing duplication by separating page-specific locators and actions into reusable modules.

## GitHub Actions
This project uses GitHub Actions for continuous integration. Tests are automatically run using GitHub Actions upon each push or pull request. The configuration for running Playwright tests in GitHub Actions can be found in the `.github/workflows` directory.
