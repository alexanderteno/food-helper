import ILocation from './ILocation';
import IMenu from './IMenu';

interface IRestaurant {
    id: number;
    name: string;
    location?: ILocation | undefined;
    menu: IMenu;
}

export default IRestaurant;