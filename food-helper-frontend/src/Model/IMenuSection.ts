import IMenuItem from './IMenuItem';

interface IMenuSection {
    id: number,
    menuId: number,
    sectionName: string,
    menuItems?: IMenuItem[] | undefined;
}

export default IMenuSection;