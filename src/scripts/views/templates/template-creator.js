import CONFIG from "../../global/config";

const createHeroSection = () => {
  return `
    <header>
        <img
        src="./images/heros/hero-image_2.jpg"
        alt="Gambar Jumbotron"
        id="hero-section"
        />
        <div class="hero-content">
        <h1 tabindex="0">Selamat Datang di RestoHunt</h1>
        <p tabindex="0">
            Temukan restoran terbaik di sekitarmu dengan mudah dan cepat!.
            Nikmati pengalaman kuliner terbaik bersama kami.
        </p>
        </div>
    </header>
    `;
};

const createRestaurantItemTemplate = (restaurant) => {
  return `
    <div class="menu-item" data-restauran-id="${restaurant.id}">
        <div class="menu-image">
        <img
            src="${CONFIG.BASE_IMAGE_URL(restaurant.pictureId)}"
            alt="Gambar Restoran ${restaurant.name}"
        />
        <div class="label-city poppins-medium"><i class="fa-sharp fa-solid fa-location-dot"></i>${
          restaurant.city
        }</div>
        </div>
        <div class="menu-detail">
        <p>Rating ${restaurant.rating} <i class="fa-solid fa-star"></i></p>
        <h3>${restaurant.name}</h3>
        <p class="poppins-light desc">${restaurant.description
          .toString()
          .substring(0, 90)}...</p>
        <a href="#/detail/${
          restaurant.id
        }" class="btn-lihat-detail" data-restaurant-id="${
    restaurant.id
  }">Lihat Detail</a>
        </div>
    </div>
  `;
};

const createRestaurantDetailTemplate = (restaurant) => {
  return `
  <div class="bread-crumb">
    <a href="#/" class="bread-crumb-item poppins-medium">
      <i class="fa-regular fa-house"></i>
      <span>Home</span>
    </a>
    <i class="fa-regular fa-angle-right splitter"></i>
    <a href="#" class="bread-crumb-item active poppins-medium">
      <span>Detail Restoran : ${restaurant.name}</span>
    </a>
  </div>

  <section id="main-detail">
    <div class="main-detail-image">
      <img src="${CONFIG.BASE_IMAGE_URL(restaurant.pictureId)}" alt="" />
    </div>
    <div class="main-detail-information">
      <h2 class="restaurant-name">${restaurant.name}</h2>
      <div class="location">
        <i class="fa-regular fa-location-dot"></i>
        <span>${restaurant.city}</span>
      </div>
      <div class="rating">
        <i class="fa-regular fa-star"></i>
        <span>Rating ${restaurant.rating}</span>
      </div>
      <div class="description">
        <p>${restaurant.description}</p>
      </div>
    </div>
  </section>
  `;
};

const createRestauranLoadingIndicatorTemplate = () => {
  let HTML = "";
  for (let i = 0; i < 6; i++) {
    HTML += `
    <div class="menu-item-loading">
        <div class="menu-image-loading">
          <div class="image-box-loading"></div>
          <div class="label-city-loading poppins-medium"><i class="fa-sharp fa-solid fa-location-dot"></i>Surabaya</div>
        </div>
        <div class="menu-detail-loading">
          <p>Rating 4.5 <i class="fa-solid fa-star"></i></p>
          <h3>Kafe Kita</h3>
          <p class="poppins-light desc-loading">Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <a href="#" class="btn-lihat-detail-loading">Lihat Detail</a>
        </div>
    </div>
    `;
  }
  return HTML;
};

const createRestaurantNotFoundTemplate = () => {
  return `
  <div class="not-found">
    <img src="./images/no-results.png">
    <p>Restoran yang anda cari tidak ditemukan</p>
  </div>
  `;
};

export {
  createHeroSection,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestauranLoadingIndicatorTemplate,
  createRestaurantNotFoundTemplate,
};
