import IRestaurant from '../Model/IRestaurant';

const mockRestaurants = require('../Fixtures/mockRestaurant.json');

class RestaurantService {

    public static getRestaurants(): Promise<IRestaurant[]> {
        return new Promise((resolve) => {
            resolve(mockRestaurants);
        });
    }

    public static getRestaurant(restaurantId: number): Promise<IRestaurant | undefined> {
        return new Promise((resolve) => {
            resolve(mockRestaurants.find((restaurant: IRestaurant) => restaurant.id === restaurantId))
        });
    }

}

export default RestaurantService;