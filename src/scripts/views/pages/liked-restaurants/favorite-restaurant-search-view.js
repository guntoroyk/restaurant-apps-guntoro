/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
        <div id="restaurant-search-container">
            <input id="query" type="text">
            <div class="restaurant-result-container">
                <ul class="restaurants">
                </ul>
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
        let html;
        if (restaurants.length > 0) {
            html = restaurants.reduce(
                (carry, restaurant) =>
                    carry.concat(
                        `<li class="restaurant"><span class="restaurant__title">${
                            restaurant.title || '-'
                        }</span></li>`
                    ),
                ''
            );
        } else {
            html =
                '<div class="restaurants__not__found">Film tidak ditemukan</div>';
        }

        document.querySelector('.restaurants').innerHTML = html;

        document
            .getElementById('restaurant-search-container')
            .dispatchEvent(new Event('restaurants:searched:updated'));
    }
}

export default FavoriteRestaurantSearchView;
