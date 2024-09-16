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

  static async search_restaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async add_review(review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
