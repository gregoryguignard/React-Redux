import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import '../styles/ListProduct.css'

// ---- Material-Ui ----
import TextField from '@material-ui/core/TextField'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'


import 'typeface-roboto';

const styles = theme => ({
    clearButton: {
        marginLeft: 10
    },
    containerSize: {
        height: 150,
        fontSize: 12
    },
    paddingText: {
        padding: 0,
    }
});


class UpdateProduct extends React.Component {

    render() {
        return (
            <div>
                <ListItem>
                    <TextField
                        id="standard-number"
                        label="Quantity"
                        type="number"
                        onChange={e => this.props.setValue(this.props.name, e.target.value, this.props.price)}
                        value={this.props.quantity}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        id="standard-number"
                        label="Price"
                        type="number"
                        onChange={e => this.props.setValue(this.props.name, e.target.value, this.props.price)}
                        value={this.props.price}
                    />
                </ListItem>
                <Button variant="outlined" color="primary" onClick={() => this.props.update(this.props.name, this.props.price, this.props.quantity)}>
                            Update product info
                    </Button>
            </div>
        );
    }
}

export default withStyles(styles)(UpdateProduct);