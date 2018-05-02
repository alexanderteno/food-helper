import * as React from 'react';
import IMenuItem from '../../../Model/IMenuItem';
import IMenuSection from '../../../Model/IMenuSection';
import MenuItem from './MenuItem/MenuItem';
import './MenuSection.scss';

const menuSectionClassName = [
  'menu-section',
  'mdc-card',
  'mdc-layout-grid__cell',
  'mdc-layout-grid__cell--span-6-desktop',
  'mdc-layout-grid__cell--span-4-tablet',
  'mdc-layout-grid__cell--span-4-phone',
];

interface IMenuSectionProps {
  menuSection: IMenuSection
}

const MenuSection: React.SFC<IMenuSectionProps> = (props) => {

  const { menuItems } = props.menuSection;

  const menuItemsChildren = menuItems ?
    menuItems.map((menuItem: IMenuItem) => React.createElement(MenuItem, { key: menuItem.id, menuItem })) :
    null;

  return (
    <div className={menuSectionClassName.join(' ')}>
      <div className="name mdc-typography--headline5">
        {props.menuSection.sectionName}
      </div>
      <div className="menu-items" children={menuItemsChildren}/>
    </div>
  );
};

export default MenuSection;