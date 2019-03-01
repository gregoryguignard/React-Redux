import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import NewProduct from './components/NewProduct';
import ListProduct from './components/ListProduct';
import { connect } from 'react-redux';
import { fetchProducts } from './redux/actions';


class App extends Component {

    state = {
        updateCom: false,
        open: false,
        edit: false,
    };



    // handleClose = () => {
    //     this.setState({
    //         open: false,
    //         name: '',
    //         price: '',
    //         quantity: ''
    //     });
    // };

    componentDidUpdate(prevProps) {
        if (prevProps.data.length !== this.props.data.length) {
            console.log('update')
            this.props.dispatch(fetchProducts())
            this.setState({
                edit: false,
                quantityUpdate: '',
                priceUpdate: '',
            })
        }
    }

    updateProduct = (productToUpdate, newQuantity, newPrice) => {
        let idToUpdate = null;
        this.state.data.forEach(element => {
            if (element.name === productToUpdate) {
                idToUpdate = element._id;
            }
        });
        axios.post("http://localhost:27017/api/updateData", {
            id: idToUpdate,
            update: {
                name: productToUpdate,
                quantity: newQuantity,
                price: newPrice
            }
        }).then(response => {
            this.setState({
                updateCom: true
            })
        })
    };


    deleteProduct = productToDelete => {
        let objIdToDelete = null;
        this.state.data.forEach(element => {
            if (element.name === productToDelete) {
                objIdToDelete = element._id;
            }
        });

        axios.delete("http://localhost:27017/api/deleteData", {
            data: {
                id: objIdToDelete
            }
        })
            .then(response => {
                this.setState({
                    updateCom: true
                })
            })
    };

    updateEdit = () => {
        this.setState(
            {
                edit: true,
            }
        )
    };


    render() {
        return (
            <div className="App">
                <ListProduct />
                <NewProduct />
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
    mapStateToProps)(App);
