import React from 'react';
import '../styles/ListProduct.css'

// ---- Material-Ui ----
import TextField from '@material-ui/core/TextField'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import { updateProduct , edit, errorMessage } from '../redux/actions';

import 'typeface-roboto';

class UpdateProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            price: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    update(name, price, quantity) {
        let idToUpdate = null;
        this.props.data.forEach(element => {
            if (element.name === name) {
              idToUpdate = element._id;
            }
        });
        if (!quantity || !price) {
            this.props.dispatch(errorMessage('You need to complete both fields to update the product.', true))
            return;
        }
        this.props.dispatch(updateProduct(idToUpdate, name, quantity, price))
        this.props.dispatch(edit(false))
        console.log(this.props.status)
        this.setState({
            quantity: '',
            price: '',
        });
    }

    render() {
        return (
            <div>
                <ListItem>
                    <TextField
                        id="standard-number"
                        label="Quantity"
                        type="number"
                        name="quantity"
                        onChange={this.handleChange}
                        value={this.state.quantity}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        id="standard-number"
                        label="Price"
                        type="number"
                        name="price"
                        onChange={this.handleChange}
                        value={this.state.price}
                    />
                </ListItem>
                <Button variant="outlined" color="primary" onClick={() => this.update(this.props.name, this.state.price, this.state.quantity)}>
                            Update product info
                    </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.products,
        status: state.edit
    };
};

export default connect(
    mapStateToProps)(UpdateProduct);