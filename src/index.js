import { getLocation } from "./core/weather.js";

const result = await getLocation('Almaty');

console.log(result);
