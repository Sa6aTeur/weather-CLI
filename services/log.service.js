import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSucces = (message) => {
  console.log(chalk.bgGreen(" SUCCES ") + " " + message);
};

const printHelp = (message) => {
  console.log(
    dedent(`${chalk.bgCyan(" HELP ")}
    Без параметров - вывод погоды
    -h - вывод помощи
    -c - [CITY] установка города
    -t - [API_KEY] установка токена
    `)
  );
};

const printWeather = (res, icon) => {
  console.clear()
  console.log(
    dedent(`${chalk.bgBlue(" WEATHER ")}
    Погода в городе ${res.name}
    ${icon} ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как: ${res.main.feels_like})
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed}
    `)
  );
};
export { printError, printSucces, printHelp, printWeather };
