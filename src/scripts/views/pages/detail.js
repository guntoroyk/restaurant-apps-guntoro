import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {
    createRestaurantDetailTemplate,
    createRestaurantMenuItemTemplate,
    createRestaurantReviewItemTemplate,
} from '../templates/template-creator';

const Detail = {
    async render() {
        return `
            <div id="restaurant_container" class="restaurant_container"></div>
            <div id="likeButtonContainer"></div>
            <div id="restaurant_menu_container" class="restaurant_menu_container">
                <h3>Menu<h3/>
                <table style="width:100%">
                    <tr>
                        <th>Food</th>
                        <th>Drink</th>
                    </tr>
                    <tr>
                        <td id="menu__food__list" class="menu__food__list">
                           
                        </td>
                        <td id="menu__drink__list" class="menu__drink__list">
                          
                        </td>
                    </tr>
                </table>
            </div>
            <div id="restaurant_review_container" class="restaurant_review_container">
                <h3>Review<h3/>
                <div id="restaurant_review_list" class="restaurant_review_list">
                    
                </div>
            </div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const url = UrlParser.parseActiveUrlWithoutCombiner();

        const restaurant = await RestaurantSource.restaurantDetail(url.id);
        const restaurantDetailContainer = document.querySelector(
            '#restaurant_container'
        );

        restaurantDetailContainer.innerHTML +=
            createRestaurantDetailTemplate(restaurant);

        const menuFoodContainer = document.querySelector('#menu__food__list');

        restaurant.menus.foods.forEach((food) => {
            menuFoodContainer.innerHTML +=
                createRestaurantMenuItemTemplate(food);
        });

        const menuDrinkContainer = document.querySelector('#menu__drink__list');

        restaurant.menus.drinks.forEach((drink) => {
            menuDrinkContainer.innerHTML +=
                createRestaurantMenuItemTemplate(drink);
        });

        const reviewListContainer = document.querySelector(
            '#restaurant_review_list'
        );

        restaurant.customerReviews.forEach((review) => {
            reviewListContainer.innerHTML +=
                createRestaurantReviewItemTemplate(review);
        });

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant,
        });
    },
};

export default Detail;
