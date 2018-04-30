import * as React from 'react';
import IMenuItem from '../../../Model/IMenuItem';
import IMenuSection from '../../../Model/IMenuSection';
import MenuItem from './MenuItem/MenuItem';

interface IMenuSectionProps {
    menuSection: IMenuSection
}

const MenuSection: React.SFC<IMenuSectionProps> = (props) => {

    const {menuItems} = props.menuSection;

    const children = menuItems ?
        menuItems.map((menuItem: IMenuItem) => React.createElement(MenuItem, {menuItem})) : null;

    return (
        <div className="menu-section">
            <div className="name">
                {props.menuSection.sectionName}
            </div>
            {children}
        </div>
    );
};

export default MenuSection;