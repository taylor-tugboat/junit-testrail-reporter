import * as chalk from 'chalk';

export const logger = {
  error: (...optionalParams: any[]) => {
    console.error(chalk.red(`[junit-testrail-reporter] `, ...optionalParams));
  },
  info: (...optionalParams: any[]) => {
    console.log(chalk.blue(`[junit-testrail-reporter] `, ...optionalParams));
  },
  success: (...optionalParams: any[]) => {
    console.log(chalk.green(`[junit-testrail-reporter] `, ...optionalParams));
  },
  warning: (...optionalParams: any[]) => {
    console.warn(chalk.yellow(`[junit-testrail-reporter] `, ...optionalParams));
  },
};
