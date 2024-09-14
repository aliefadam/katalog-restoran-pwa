import RestaurantSource from "../../data/restaurant-source";
import {
  createHeroSection,
  createRestaurantItemTemplate,
} from "../templates/template-creator";

const Home = {
  async render() {
    return `
    ${createHeroSection()}
    <main id="main-content">
        <h2 tabindex="0" class="poppins-semibold">Jelajahi Restoran Kami</h2>
        <div id="menu-container"></div>
    </main>
    `;
  },

  async afterRender() {
    document.getElementById("menu-container").innerHTML = "LOADING....";

    await RestaurantSource.restaurant_list().then((restaurants) => {
      document.getElementById("menu-container").innerHTML = "";

      restaurants.forEach((restaurant) => {
        document.getElementById("menu-container").innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
    });
  },
};

export default Home;
