import * as React from 'react';
import IMenuItem from '../../Model/IMenuItem';
import IRestaurant from '../../Model/IRestaurant';

interface IRestaurantProps {
  restaurant: IRestaurant;
  menuItems: IMenuItem[] | undefined;
}

const Restaurant: React.SFC<IRestaurantProps> = (props) => (
  <div className="restaurant">
    <div className="name">
      {props.restaurant.name}
    </div>
    {
      props.menuItems && (
        props.menuItems.map((menuItem: IMenuItem) => (
          <div className="menu-item">
            {menuItem.name}
          </div>
        ))
      )
    }
  </div>
);

export default Restaurant;