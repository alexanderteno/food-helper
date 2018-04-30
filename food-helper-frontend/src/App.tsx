import * as React from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import NavigationDrawer from './Components/Navigation/NavigationDrawer/NavigationDrawer';
import Restaurant from './Components/Restaurant/Restaurant';
import IRestaurant from './Model/IRestaurant';
import RestaurantService from './Services/RestaurantService';

interface IAppState {
    currentRestaurant: IRestaurant | undefined;
    navigationOpen: boolean;
    restaurants: IRestaurant[] | undefined;
}

class App extends React.Component<any, IAppState> {

    constructor(props: any) {
        super(props);

        this.state = {
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
                this.setState(({restaurants}));
            });
    }

    public render() {

        const toggleAvailable = !!this.state.restaurants;

        const restaurant = this.state.currentRestaurant ?
            React.createElement(Restaurant, {restaurant: this.state.currentRestaurant}) : null;

        return (
            <div className="app">
                {(toggleAvailable && this.state.navigationOpen) && (
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
                    <main className="content">
                        {restaurant}
                    </main>
                </div>
            </div>
        );
    }

    private toggleNavigation() {
        this.setState(((prevState: IAppState) => ({navigationOpen: !prevState.navigationOpen})));
    }

    private selectRestaurant(restaurant: IRestaurant) {
        this.setState(({currentRestaurant: restaurant}));
    }

}

export default App;
