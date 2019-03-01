import React from 'react';
import '../styles/NewProduct.css'

// ---- Material-Ui ----
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography'

import 'typeface-roboto';
import { addProduct, errorMessage } from '../redux/actions';

import { connect } from 'react-redux';

class NewProduct extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: '',
            price: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    clearFields() {
        this.setState({
            name: '',
            quantity: '',
            price: '',
        });
    }

    addNewProduct(name, price, quantity) {
        let exit = false;
        if (this.props.data.length > 0) {
            this.props.data.map(element => {
                if (element.name.toLowerCase() === name.toLowerCase()) {
                    exit = true;
                    return;
                }
            })
            if (!name || !price || !quantity) {
                exit = true;
            }
            if (exit) {
                let message = '';
                if (!this.state.name || !this.state.quantity || !this.state.price) {
                    message ='You need to complete all the field in order to add a product'
                } else {
                    message = `${this.state.name} is already listed as a product`
                }
                this.clearFields()
                this.props.errorMessage(message, true)
                return;
            }

        }
        this.props.addProduct(name, price, quantity)
        this.clearFields()

    }

    render() {

        return (
            <div className="newProduct">
                <div id="material-ui">
                    <FormControl>
                        <br />
                        <Typography inline={true} variant="subtitle1" >
                            Fill up the form to add a new product
                        </Typography>
                        <TextField
                            id="standard-name"
                            label="Name"
                            name="name"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.name}
                            margin="normal"
                        />
                        <TextField
                            id="standard-number"
                            name="quantity"
                            label="Quantity"
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.quantity}
                            margin="normal"
                        />
                        <TextField
                            id="standard-number"
                            label="Price"
                            type="number"
                            name="price"
                            onChange={this.handleChange}
                            value={this.state.price}
                            margin="normal"
                        />
                        <Button variant="outlined" color="primary" onClick={() => this.addNewProduct(this.state.name, this.state.quantity, this.state.price)}>
                            Add Product
                    </Button>
                    </FormControl>
                </div>
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
    mapStateToProps, { addProduct,errorMessage })(NewProduct);