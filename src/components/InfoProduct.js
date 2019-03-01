import React from 'react';

// ---- Material-Ui ----
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import 'typeface-roboto';



class ListProduct extends React.Component {

    render() {
        return (
            <div>
                <ListItem  >
                    <ListItemIcon>
                        <ShoppingBasketIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={this.props.quantity}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={this.props.price + ' €/Kg'}
                    />
                </ListItem>
            </div>
        );
    }
}

export default ListProduct;