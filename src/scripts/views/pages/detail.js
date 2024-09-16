import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import AddReviewInitiator from "../../utils/add-review-initiator";

import {
  createAddReviewTemplate,
  createRestaurantDetailLoadingIndicatorTemplate,
  createRestaurantDetailTemplate,
} from "../templates/template-creator";

const Detail = {
  async render() {
    return `
    <main id="main-content-detail"></main>
    ${createAddReviewTemplate()}
    `;
  },

  async afterRender() {
    AddReviewInitiator.init({
      overlay: document.getElementById("overlay-add-review"),
      box: document.querySelector(".box-add-review"),
      btnClose: document.getElementById("btn-close-add-review"),
    });

    document.getElementById("main-content-detail").innerHTML =
      createRestaurantDetailLoadingIndicatorTemplate();

    setTimeout(async () => {
      const id = UrlParser.parseActiveUrlWithoutCombiner().id;
      await RestaurantSource.detail_restaurant(id).then((restaurant) => {
        document.getElementById("main-content-detail").innerHTML =
          createRestaurantDetailTemplate(restaurant);
      });
    }, 0);
  },
};

export default Detail;
