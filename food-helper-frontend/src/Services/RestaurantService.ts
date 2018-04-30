import IMenuItem from '../Model/IMenuItem';
import IRestaurant from '../Model/IRestaurant';

const mockRestaurants: IRestaurant[] = [
  {
    address: '8380 Kennedy Rd c8, Unionville, ON L3R 2N9',
    id: 0,
    name: '369 Shanghai Dim Sum',
  },
];

const mockMenuItems: {[key: number]: IMenuItem[]} = {
  0: [
    {
      name: 'Soup',
      rating: 2,
    },
  ],
};

class RestaurantService {

  public static getRestaurants(): Promise<IRestaurant[]> {

    return new Promise((resolve) => {
      resolve(mockRestaurants);
    });

  }

  public static getMenu(restaurantId: number): Promise<IMenuItem[]> {

    return new Promise((resolve) => {
      resolve(mockMenuItems[restaurantId] || []);
    });

  }

}

export default RestaurantService;