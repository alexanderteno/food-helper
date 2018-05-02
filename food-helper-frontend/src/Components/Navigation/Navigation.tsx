import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

interface INavigationProps {
  navigationOpen: boolean;
  toggleAvailable: boolean;
  toggleNavigation: () => void;
}

const Navigation: React.SFC<INavigationProps> = (props) => (
  <header className="navigation mdc-toolbar mdc-elevation--z4">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
        {
          props.toggleAvailable ? (
            <div
              className="material-icons mdc-toolbar__menu-icon"
              onClick={props.toggleNavigation}
            >
              {props.navigationOpen ? 'arrow_back' : 'menu'}
            </div>
          ) : (
            <div className="material-icons mdc-toolbar__menu-icon mdc-icon-spin">
              loop
            </div>
          )
        }
        <Link to="/" className="mdc-toolbar__title catalog-title">
          Menu Helper
        </Link>
      </section>
    </div>
  </header>
);

export default Navigation;