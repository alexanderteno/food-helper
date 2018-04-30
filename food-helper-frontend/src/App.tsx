import * as React from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import NavigationDrawer from './Components/Navigation/NavigationDrawer/NavigationDrawer';
import Restaurant from './Components/Restaurant/Restaurant';
import IMenuItem from './Model/IMenuItem';
import IRestaurant from './Model/IRestaurant';
import RestaurantService from './Services/RestaurantService';

interface IAppState {
  currentRestaurant: IRestaurant | undefined;
  currentMenuItems: IMenuItem[] | undefined;
  navigationOpen: boolean;
  restaurants: IRestaurant[] | undefined;
}

class App extends React.Component<any, IAppState> {

  constructor(props: any) {
    super(props);

    this.state = {
      currentMenuItems: undefined,
      currentRestaurant: undefined,
      navigationOpen: false,
      restaurants: undefined,
    };

    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.selectRestaurant = this.selectRestaurant.bind(this);
  }

  public componentDidMount() {
    RestaurantService.getRestaurants()
      .then((restaurants: IRestaurant[]) => {
        this.setState(( { restaurants } ));
      });
  }

  public render() {

    const toggleAvailable = !!this.state.restaurants;

    return (
      <div className="app">
        {( toggleAvailable && this.state.navigationOpen ) && (
          <NavigationDrawer
            restaurants={this.state.restaurants as IRestaurant[]}
            selectRestaurant={this.selectRestaurant}
          />
        )}
        <div className="content">
          <Navigation
            navigationOpen={this.state.navigationOpen}
            toggleNavigation={this.toggleNavigation}
            toggleAvailable={toggleAvailable}
          />
          <main className="mdc-layout-grid">
            {
              this.state.currentRestaurant ? (
                <Restaurant
                  restaurant={this.state.currentRestaurant}
                  menuItems={this.state.currentMenuItems}
                />
              ) : 'No Restaurant Selected'
            }
          </main>
        </div>
      </div>
    );
  }

  private getMenu() {

    if (!this.state.currentRestaurant) {
      return;
    }

    RestaurantService.getMenu(this.state.currentRestaurant.id)
      .then((menuItems: IMenuItem[]) => {
        this.setState(( { currentMenuItems: menuItems } ));
      });

  }

  private toggleNavigation() {
    this.setState(( (prevState: IAppState) => ( { navigationOpen: !prevState.navigationOpen } ) ));
  }

  private selectRestaurant(restaurant: IRestaurant) {
    this.setState(( { currentRestaurant: restaurant } ), this.getMenu);
  }

}

export default App;
