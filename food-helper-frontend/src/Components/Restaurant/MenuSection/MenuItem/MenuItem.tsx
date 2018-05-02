import * as React from 'react';
import IMenuItem from '../../../../Model/IMenuItem';
import './MenuItem.scss';

interface IMenuItemProps {
  menuItem: IMenuItem;
}

const MenuItem: React.SFC<IMenuItemProps> = (props) => (
  <div className="menu-item">
    <div className="name mdc-typography--body1">
      {props.menuItem.name}
    </div>
    <div className="mdc-card__actions">
      <div className="mdc-card__action-icons">
        <i className="material-icons">
          star_border
        </i>
        <i className="material-icons">
          star_border
        </i>
        <i className="material-icons">
          star_border
        </i>
        <i className="material-icons">
          star_border
        </i>
        <i className="material-icons">
          star_border
        </i>
      </div>
    </div>
  </div>
);

export default MenuItem;