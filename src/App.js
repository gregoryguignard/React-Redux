import React, { Component } from 'react';
import './App.css';
import NewProduct from './components/NewProduct';
import ListProduct from './components/ListProduct';
import ErrorMessage from './components/ErrorMessage';
import { connect } from 'react-redux';
class App extends Component {


    render() {
        return (
            <div className="App">
                <ListProduct />
                <NewProduct />
                <ErrorMessage/>
            </div>
        );
    }
}
export default connect()(App);
