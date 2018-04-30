import IMenuItem from '../Model/IMenuItem';
import IRestaurant from '../Model/IRestaurant';

const mockRestaurant = require('../Fixtures/mockRestaurant.json');

class RestaurantService {

    public static getRestaurants(): Promise<IRestaurant[]> {

        return new Promise((resolve) => {
            resolve([mockRestaurant]);
        });

    }

    public static getMenu(restaurantId: number): Promise<IMenuItem[]> {

        return new Promise((resolve) => {
            resolve(mockRestaurant.menu);
        });

    }

}

export default RestaurantService;