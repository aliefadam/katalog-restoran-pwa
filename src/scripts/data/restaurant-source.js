import API_ENDPOINT from "../global/api-endpoint";

class RestaurantSource {
  static async restaurant_list() {
    const response = await fetch(API_ENDPOINT.LIST_OF_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail_restaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
