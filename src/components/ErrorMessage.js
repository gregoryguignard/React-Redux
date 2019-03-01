import React from 'react';
import '../styles/NewProduct.css'

// ---- Material-Ui ----
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import 'typeface-roboto';
import { errorMessage } from '../redux/actions';
import { connect } from 'react-redux';

class ErrorMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: '',
            price: '',
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.errorMessage('',false)
    }

    render() {

        const open = this.props.status.openErrorMessage;
        return (
            <div className="errorMessage">
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.status.message}</span>}
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
        data: state.products,
        status: state.edit
    };
};
export default connect(
    mapStateToProps, {errorMessage})(ErrorMessage);