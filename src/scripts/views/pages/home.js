import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
      <div class="explore">
        <h2 class="explore__title">Explore Restaurant</h2>
        <div id="explore__list" class="explore__list">

        </div>
      </div>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const restaurants = await RestaurantSource.restaurantList();

        console.log('restaurants', restaurants);
        const restaurantContainer = document.querySelector('#explore__list');

        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;
