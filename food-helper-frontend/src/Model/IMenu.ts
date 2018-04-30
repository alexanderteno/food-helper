import IMenuItem from './IMenuItem';
import IMenuSection from './IMenuSection';

interface IMenu {
    id: number;
    restaurantId: number;
    menuSections?: IMenuSection[] | undefined;
    orphanMenuItems?: IMenuItem[] | undefined;
}

export default IMenu;