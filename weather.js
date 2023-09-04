#!/usr/bin/env node

import process from "node:process";
import { getArgs } from "./helpers/args.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";
import { getIcon, getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token wasn`t passed");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved!!!");
  } catch (err) {
    printError(err.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City wasn`t passed");
    return;
  }
  try {
    const weather = await getWeather(city);
    if (weather) {
      await saveKeyValue(TOKEN_DICTIONARY.city, city);
      printSuccess("City was saved!!!");
    }
  } catch (err) {
    printError("This city name is not valid!!");
  }
};

const getForecast = async () => {
  try {
    const CITY = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const weather = await getWeather(CITY);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    if (error?.response?.status == 404) {
      printError("Wrong name of city");
    } else if (error?.response?.status == 401) {
      printError("Wrong name of token");
    } else {
      printError(error.message);
    }
  }
};

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForecast();
};

initCli();
