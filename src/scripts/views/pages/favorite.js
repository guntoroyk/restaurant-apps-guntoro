import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <div class="explore">
          <h2 class="explore__title">Favorite Restaurant</h2>
          <div id="explore__list" class="explore__list">

          </div>
        </div>
      `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('#explore__list');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Favorite;
