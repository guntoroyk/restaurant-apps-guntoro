/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/restaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        new FavoriteRestaurantShowPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb,
        });
        new FavoriteRestaurantSearchPresenter({
            view,
            favoriteRestaurants: FavoriteRestaurantIdb,
        });
    },
};

export default Favorite;
