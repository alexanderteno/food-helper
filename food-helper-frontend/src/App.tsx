import * as React from 'react';
import { match as Match } from 'react-router';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import NavigationDrawer from './Components/Navigation/NavigationDrawer/NavigationDrawer';
import Restaurant from './Components/Restaurant/Restaurant';
import IRestaurant from './Model/IRestaurant';
import RestaurantService from './Services/RestaurantService';

const DEC_RADIX = 10;

interface IAppProps {
  match: Match<{restaurantId?: string}>
}

interface IAppState {
  restaurantId: number | undefined;
  navigationOpen: boolean;
  restaurants: IRestaurant[] | undefined;
}

class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);

    const restaurantId = parseInt(props.match.params.restaurantId as string, DEC_RADIX);

    this.state = {
      navigationOpen: false,
      restaurantId: !isNaN(restaurantId) ? restaurantId : undefined,
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

    const filterRestaurant = (restaurant: IRestaurant) => restaurant.id === this.state.restaurantId;

    const selectedRestaurant = ( this.state.restaurants || [] ).find(filterRestaurant);
    const currentRestaurant = React.createElement(Restaurant, { restaurant: selectedRestaurant });

    return (
      <div className="app">
        {( toggleAvailable && this.state.navigationOpen ) && (
          <NavigationDrawer
            restaurants={this.state.restaurants as IRestaurant[]}
            selectRestaurant={this.selectRestaurant}
          />
        )}
        <div className="app-content">
          <Navigation
            navigationOpen={this.state.navigationOpen}
            toggleNavigation={this.toggleNavigation}
            toggleAvailable={toggleAvailable}
          />
          <main className="content">
            {currentRestaurant}
          </main>
        </div>
      </div>
    );
  }

  private toggleNavigation() {
    this.setState(( (prevState: IAppState) => ( { navigationOpen: !prevState.navigationOpen } ) ));
  }

  private selectRestaurant(restaurant: IRestaurant) {
    this.setState(( { restaurantId: restaurant.id } ));
  }

}

export default App;
