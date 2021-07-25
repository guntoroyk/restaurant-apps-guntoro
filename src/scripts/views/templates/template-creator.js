import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description} minutes</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <img src="${
        restaurant.pictureId
            ? `${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}`
            : 'https://picsum.photos/id/666/800/450?grayscale'
    }"
        alt="${restaurant.name || '-'}" />
    <p class="restaurant-item__content__city">${restaurant.city || '-'}</p>
    <div class="restaurant-item__content">
        <p class="">Rating: ${restaurant.rating || '-'} </p>
        <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${
    restaurant.name || '-'
}</a></h3>
        <p class="restaurant-item__content__desc">${
            restaurant.description || '-'
        }</p>
    </div>
  </article>
  `;

const createRestaurantMenuItemTemplate = (menu) => `
        <div>${menu.name}</div>
`;

const createRestaurantReviewItemTemplate = (review) => `
  <div class="restaurant_review_item">
    <h3>${review.name}</h3>
    <p>${review.date}</p>
    <p>${review.review}</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createRestaurantMenuItemTemplate,
    createRestaurantReviewItemTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
};
