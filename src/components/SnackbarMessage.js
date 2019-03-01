import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'typeface-roboto';

class SnackbarMessage extends React.Component {

    render() {
        const open = this.props.open
        const name = this.props.name
        return (
            <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={this.props.close()}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{name} already listed as a product</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="secondary"
                // onClick={this.props.handleClose()}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        );
    }
}

export default SnackbarMessage;