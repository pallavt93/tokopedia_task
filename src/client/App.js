import React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { fetchInitialAppData } from './actions/app/appActions';
import { Container } from 'react-bootstrap';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import './App.css';


const App = ( { route, history, initialAppData} ) => {
    return (
        <div>
            <Header logo={initialAppData.logo} history={history} />
            <Container>
                {renderRoutes(route.routes)}
            </Container>
            <Footer />
        </div>
    );
};

function mapStateToProps(state){
    return { initialAppData: state.initialAppData }
}

function loadData(store, match) {
    return store.dispatch(fetchInitialAppData());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchInitialAppData })(App)
}




