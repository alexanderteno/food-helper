import * as React from 'react';
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
            <a
              href="#"
              className="material-icons mdc-toolbar__menu-icon"
              onClick={props.toggleNavigation}
            >
              menu
            </a>
          ) : (
            <div className="material-icons mdc-toolbar__menu-icon mdc-icon-spin">
              loop
            </div>
          )
        }
        <span className="mdc-toolbar__title catalog-title">Menu Helper</span>
      </section>
    </div>
  </header>
);

export default Navigation;