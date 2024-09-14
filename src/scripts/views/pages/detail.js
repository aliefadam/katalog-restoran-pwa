import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `<main id="main-content-detail"></main>`;
  },

  async afterRender() {
    document.getElementById("main-content-detail").innerHTML = "LOADING....";

    const id = UrlParser.parseActiveUrlWithoutCombiner().id;
    await RestaurantSource.detail_restaurant(id).then((restaurant) => {
      document.getElementById("main-content-detail").innerHTML =
        createRestaurantDetailTemplate(restaurant);
    });
  },
};

export default Detail;
