import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
      <div class="hero">
            <picture>
                <source media="(max-width: 600px)" srcset="./images/heros/hero-image_small.jpg">
                <img 
                    src="./images/heros/hero-image.jpg" 
                    alt="Restaurant Table Image"></img>
            </picture>
            <div class="hero__inner">
                <h1 class="hero__title">Semua ada untuk kebutuhan makanmu!</h1>
                <p class="hero__tagline">Pesan sekarang, langsung diantar. Cari makanan berkualitas kini jadi lebih mudah
                </p>
            </div>
      </div>
      <div class="explore">
        <h2 class="explore__title">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const restaurants = await RestaurantSource.restaurantList();

        console.log('restaurants', restaurants);
        const restaurantContainer = document.querySelector('#restaurants');

        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;
