import { showLoading } from "./toggleLoading.js";
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    log(error);
  }
};
export default fetchDrinks;
