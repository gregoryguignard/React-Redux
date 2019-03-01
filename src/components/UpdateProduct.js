import React from 'react';
import '../styles/ListProduct.css'

// ---- Material-Ui ----
import TextField from '@material-ui/core/TextField'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import { updateProduct , edit } from '../redux/actions';

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
        this.props.dispatch(updateProduct(idToUpdate, name, quantity, price))
        this.props.dispatch(edit(false))
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
        edit: state.edit
    };
};

export default connect(
    mapStateToProps)(UpdateProduct);