import FavoritRestaurantIDB from "../../data/favorite-restaurant-idb";
import {
  createBreadCrum,
  createEmptyFavoriteRestaurantTemplate,
  createRestauranLoadingIndicatorTemplate,
  createRestaurantFavoriteTemplate,
  createRestaurantItemTemplate,
} from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
    <main id="main-content-favorite">
      ${createBreadCrum()}
      <section id="main-favorite">
        <h1>Restoran Favorit</h1>
        <div id="main-favorite-list"></div>
      </section>
    </main>`;
  },
  async afterRender() {
    this._showLoading();
    this._afterLoading();
  },

  _showLoading() {
    document.getElementById("main-favorite-list").innerHTML =
      createRestauranLoadingIndicatorTemplate();
  },

  _afterLoading() {
    setTimeout(async () => {
      document.getElementById("main-favorite-list").innerHTML = "";
      await FavoritRestaurantIDB.getAllRestaurant().then((restaurants) => {
        if (restaurants.length == 0) {
          document.getElementById("main-favorite-list").innerHTML =
            createEmptyFavoriteRestaurantTemplate();
        } else {
          restaurants.forEach((restaurant) => {
            document.getElementById("main-favorite-list").innerHTML +=
              createRestaurantFavoriteTemplate(restaurant);
          });
        }
      });
    }, 500);
  },
};

export default Favorite;
