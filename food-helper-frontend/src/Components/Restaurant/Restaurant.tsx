import * as React from 'react';
import IMenuSection from '../../Model/IMenuSection';
import IRestaurant from '../../Model/IRestaurant';
import MenuSection from './MenuSection/MenuSection';

const nameClassName = [
  'name',
  'mdc-typography--headline4',
  'mdc-layout-grid__cell',
  'mdc-layout-grid__cell--span-12-desktop',
  'mdc-layout-grid__cell--span-8-tablet',
  'mdc-layout-grid__cell--span-4-phone',
];

interface IRestaurantProps {
  restaurant: IRestaurant | undefined;
}

const Restaurant: React.SFC<IRestaurantProps> = (props) => {

  if (!props.restaurant) {
    return (
      <div className="restaurant mdc-layout-grid"> Loading... </div>
    );
  }

  const { menuSections } = props.restaurant.menu;

  const menuSectionsChildren = menuSections ?
    menuSections.map((menuSection: IMenuSection) => React.createElement(MenuSection, {
      key: menuSection.id,
      menuSection,
    })) : null;

  return (
    <div className="restaurant mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <div className={nameClassName.join(' ')}>
          {props.restaurant.name}
        </div>
      </div>
      <div className="menu mdc-layout-grid">
        <div className="menu-sections mdc-layout-grid__inner" children={menuSectionsChildren}/>
      </div>
    </div>
  );
};

export default Restaurant;