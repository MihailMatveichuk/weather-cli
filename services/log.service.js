import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(`${chalk.bgRedBright(" ERROR ")} ${error}`);
};
const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(" SUCCESS ")} ${message}`);
};
const printHelp = () => {
  console.log(
    dedent`${chalk.bgYellow(" HELP ")} 
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API KEY] для установки токена  
    `
  );
};

const printWeather = (weather, icon) => {
  console.log(
    dedent`
    ${chalk.bgGreen("WEATHER:")}
    ${chalk.cyanBright("City")}: ${weather.name}
    ${chalk.green("Description:")} ${weather.weather[0].description} ${icon}
    ${chalk.grey("Tempeature:")} ${weather.main.temp} (feels like ${
      weather.main.feels_like
    })
    ${chalk.blueBright("Humidity:")} ${weather.main.humidity} %
    ${chalk.yellowBright("Wind speed:")} ${weather.wind.speed} m/s
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };
