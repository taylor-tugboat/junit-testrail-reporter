<h1 align="center">junit-testrail-reporter</h1>

<div align="center">

[![CI Status](https://github.com/JSanchezIO/junit-testrail-reporter/workflows/CI/badge.svg)](https://github.com/JSanchezIO/junit-testrail-reporter/actions/workflows/ci.yml)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![NPM Package Version](https://img.shields.io/npm/v/junit-testrail-reporter)](https://www.npmjs.com/package/junit-testrail-reporter)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://semantic-release.gitbook.io/semantic-release/)

</div>

<br />

You've got some test cases in TestRail that are automated and the results are ouputted in a
junit-compliant format. This will report the results as a run in TestRail.

<br />

## Installation

Begin by install the package as a dependency

```sh
npm i junit-testrail-reporter
```

<br />

## Usage

1. Add the test suite and case identifier in the title of your test:

   ```js
     ...

     it('S123456 C123456 given some scenario when an action is taken then something is true', () => {})

     // multiple test cases are supported as well
     test('S123456 C654321 C654321 C678901 given some scenario when an action is taken then something is true', () => {})

     // so are multiple test suites
     test('S123456 C123456 S654321 C654321 C678901 given some scenario when an action is taken then something is true', () => {})

     ...
   ```

2. Configure and run your tests to output a junit-compliant test report

   - https://github.com/jest-community/jest-junit
   - https://github.com/michaelleeallen/mocha-junit-reporter

3. Run

   ```bash
   npx junit-testrail-reporter -p='test-results/*.xml'
   ```

<br />

## Configuration

| Argument Name           | Environment Variable  | Description                                                               | Required | Default                                            |
| ----------------------- | --------------------- | ------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| `host` or `h`           | `TESTRAIL_HOST`       | The host of the TestRail server to send results to.                       | ✔️       | -                                                  |
| -                       | `TESTRAIL_PASSWORD`   | The password, of the user, used to authenticate with TestRail.            | ✔️       | -                                                  |
| `projectId`             | `TESTRAIL_PROJECT_ID` | The identifier of the TestRail project to send results to.                | ✔️       | -                                                  |
| `resultsPattern` or `p` | -                     | The glob pattern for test result files that will be reported to TestRail. | ✔️       | -                                                  |
| `runName` or `r`        | `TESTRAIL_RUN_NAME`   | A brief description used to identify the automated test run.              | ❌       | `"Automated Test Run via junit-testrail-reporter"` |
| `username` or `u`       | `TESTRAIL_USERNAME`   | The username of the account to authenticate with TestRail.                | ✔️       | -                                                  |

<br />

> The **password** configuration parameter can only be set via environment variable.

> The **resultsPattern** configuration parameter can only be set via command line arguments.
