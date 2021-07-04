import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
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
  <article class="explore__list__item">
    <img src="${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}"
        alt="${restaurant.name}" />
    <p class="explore__list__item__content__city">${restaurant.city}</p>
    <div class="explore__list__item__content">
        <p class="">Rating: ${restaurant.rating} </p>
        <h3 class="explore__list__item__content__title"><a href="${`/#/detail/${restaurant.id}`}">${
    restaurant.name
}</a></h3>
        <p class="explore__list__item__content__desc">${
            restaurant.description
        }</p>
    </div>
  </article>
  `;

const createRestaurantMenuItemTemplate = (menu) => `
        <li>${menu.name}</li>
`;

const createRestaurantReviewItemTemplate = (review) => `
  <div class="restaurant_review_item">
    <h3>${review.name}</h3>
    <p>${review.date}</p>
    <p>${review.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createRestaurantMenuItemTemplate,
    createRestaurantReviewItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
