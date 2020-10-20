import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/products/productActions';
import ProductDetails from '../components/products/ProductDetails';

const ProductDescriptionPage = (props) => {

    useEffect( () =>{
        props.fetchProduct(props.match.params.id);
    },[]);

    return (
        <div>
            <ProductDetails product={props.product} />
        </div>
    );
}

function mapStateToProps(state){
    return { product: state.product }
}

function loadData(store, match) {
    return store.dispatch(fetchProduct(match.params.id));
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchProduct })(ProductDescriptionPage)
}
