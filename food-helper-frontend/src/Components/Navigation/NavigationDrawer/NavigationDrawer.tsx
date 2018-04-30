import * as React from 'react';
import IRestaurant from '../../../Model/IRestaurant';
import './NavigationDrawer.scss';

interface INavigationDrawerProps {
  restaurants: IRestaurant[];
  selectRestaurant: (restaurant: IRestaurant) => void;
}

const NavigationDrawer: React.SFC<INavigationDrawerProps> = (props) => (
  <aside className="mdc-drawer mdc-drawer--persistent mdc-drawer--open">
    <nav className="mdc-drawer__drawer">
      <div className="mdc-drawer__toolbar-spacer"/>
      <div className="mdc-list-group">
        <nav className="mdc-list">
          {
            props.restaurants.map(( (restaurant: IRestaurant) => (
                <a
                  href="#"
                  className="mdc-list-item"
                  onClick={() => props.selectRestaurant(restaurant)}
                  key={restaurant.id}
                >
                  {restaurant.name}
                </a>
              ) ),
            )
          }
        </nav>
      </div>
    </nav>
  </aside>
);

export default NavigationDrawer;