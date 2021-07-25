import { createRestaurantItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
            <div class="explore">
                <input class="restaurant-search-input" id="query" type="text" placeholder="Cari restaurant">
                <h2 class="explore__title">Favorite Restaurant</h2>
                <div id="restaurant-search-container">
                    <div id="restaurants" class="restaurants">
                        
                    </div>
                </div>
            </div>
        `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showRestaurants(restaurants) {
        this.showFavoriteRestaurants(restaurants);
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce(
                (carry, restaurant) =>
                    carry.concat(createRestaurantItemTemplate(restaurant)),
                ''
            );
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('restaurants').innerHTML = html;

        document
            .getElementById('restaurants')
            .dispatchEvent(new Event('restaurants:updated'));
    }

    _getEmptyRestaurantTemplate() {
        return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
}

export default FavoriteRestaurantSearchView;
