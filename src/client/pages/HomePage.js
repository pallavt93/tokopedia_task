import React from 'react';
import { fetchProducts } from '../actions/products/productsActions';
import ProductsList from '../components/products/ProductsList';
import ProductsCarousel from '../components/products/ProductsCarousel';

const HomePage = (props) => {
    return (
        <div>
            <ProductsCarousel />
            <hr/>
            <ProductsList history={props.history} />
        </div>
    );
};

function loadData(store) {
    return store.dispatch(fetchProducts());
}

export default {
    loadData,
    component: HomePage
}