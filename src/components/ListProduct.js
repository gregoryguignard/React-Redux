import React from 'react';
import '../styles/ListProduct.css'

// ---- Material-Ui ----
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab'
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import UpdateProduct from './UpdateProduct';
import InfoProduct from './InfoProduct';
import { connect } from 'react-redux';
import { fetchProducts , deleteProduct, edit } from '../redux/actions';



class ListProduct extends React.Component {

    state = {
        clickedEdit: ''
    };

    updateProduct = (clickedEdit) => {
        this.setState({
            clickedEdit: clickedEdit,
        })
        this.props.dispatch(edit(true));

    }

    componentDidUpdate(prevProps) {
        if (prevProps.data.length !== this.props.data.length) {
            this.props.dispatch(fetchProducts())
        }
    }

    deleteExistingProduct = productToDelete => {
        let objIdToDelete = null;
        this.props.data.forEach(element => {
            if (element.name === productToDelete) {
                objIdToDelete = element._id;
            }
        });
        this.props.dispatch(deleteProduct(objIdToDelete));
    };


    render() {

        const data = this.props.data
        return (
            <div className="list">
                <Grid container spacing={40}>
                    {data.length <= 0
                        ? <Grid className='noProduct' item sm={6} md={4} lg={3}>No product available</Grid>
                        : data.map(dat => (
                            <Grid item key={dat.name} sm={6} md={4} lg={3}>
                                <List className='paddingText'>
                                    <div>
                                        <Typography inline={true} variant="subtitle1" >
                                            {dat.name}
                                        </Typography>
                                        <Fab size="small" color="primary" aria-label="Edit" className='listButton'
                                            onClick={() => this.updateProduct(dat.name)}
                                        >
                                            <EditIcon />
                                        </Fab>
                                        <Fab size="small" aria-label="Delete" className='listButton' color="secondary"
                                            onClick={() => this.deleteExistingProduct(dat.name)}>
                                            <DeleteIcon />
                                        </Fab>
                                    </div>
                                    {this.props.status.edit && this.state.clickedEdit === dat.name ? <UpdateProduct {...dat} /> : <InfoProduct {...dat}/>
                                    }
                                </List>
                            </Grid>
                        ))}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.products,
        status : state.edit
    };
};
  
export default connect(
    mapStateToProps)(ListProduct);