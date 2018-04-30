import * as React from 'react';
import IMenuItem from '../../../../Model/IMenuItem';

interface IMenuItemProps {
    menuItem: IMenuItem;
}

const MenuItem: React.SFC<IMenuItemProps> = (props) => (
    <div className="menu-item">
        <div className="name">
            {props.menuItem.name}
        </div>
    </div>
);

export default MenuItem;