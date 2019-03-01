import React from 'react';
import '../styles/NewProduct.css'

// ---- Material-Ui ----
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import { Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// ---- React-Bootstrap ---- 
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';
// import InputGroup from 'react-bootstrap/InputGroup';
import 'typeface-roboto';
import { addProduct } from '../redux/actions';

import { connect } from 'react-redux';

class NewProduct extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: '',
            price: '',
            open: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClose = () => {
        this.setState({
            open: false,
            name: '',
            price: '',
            quantity: ''
        });
    };

    addNewProduct(name, price, quantity) {
        let exit = false;
        if (this.props.data.length > 0) {
            this.props.data.map(element => {
                if (element.name.toLowerCase() === name.toLowerCase()) {
                    exit = true;
                }
            })
            if (!name || !price || !quantity) {
                exit = true;
            }
            if (exit) {
                this.setState({ open: true })
                return;
            }
        }
        this.props.addProduct(name, price, quantity)
        this.setState({
            name: '',
            quantity: '',
            price: '',
        });
    }

    render() {

        const open = this.state.open;
        const message = !this.state.name || !this.state.quantity || !this.state.price ? 'You need to complete all the field in order to add a product' : `${this.state.name} is already listed as a product`

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

                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="secondary"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.products
    };
};
export default connect(
    mapStateToProps, { addProduct })(NewProduct);