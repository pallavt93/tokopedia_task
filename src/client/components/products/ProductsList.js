import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, setProductsPage, getProductsPage } from '../../actions/products/productsActions';
import ProductItem from './ProductItem';
import { Row, Col, Button, Spinner  } from 'react-bootstrap';

class ProductsList extends React.Component{
    constructor(props){
        super(props);
        this.currentPage = 1;
        this.state = {
            productPage: 1,
            loadMoreData: true,
            error: ""
        }
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }
    componentDidMount(){
        if(this.props.products.length === 0 ){
            this.props.fetchProducts(this.state.productPage);
            this.setState((prevState)=>({ productPage: prevState.productPage + 1 }));
            this.props.setProductsPage({ pageNumber: 2 });
            
        }else{
            if( this.props.productsPage.pageNumber ){
                this.setState(()=>({ productPage: this.props.productsPage.pageNumber }));
            }else{
                this.setState((prevState)=>({ productPage: prevState.productPage + 1 }));
                this.props.setProductsPage({ pageNumber: 2 });
            }
        }
        this.currentPage++;
        
    }
    renderProducts(){

        return this.props.products.map( product => {
            return (
                <Col  key={product.id} >
                    <ProductItem 
                        product={product} 
                        history = {this.props.history}
                    />
                </Col>
            );
        });
    }

    componentWillUnmount(){
        this.props.setProductsPage({ pageNumber: this.state.productPage });
    }

    getProducts(){
        if(this.state.error === ""){
            this.setState(()=>({ loadMoreData: false}));
        }
        if(this.state.productPage >= this.currentPage){
            this.props.fetchProducts(this.state.productPage).then((res)=>{
                this.setState((prevState)=>({ productPage: prevState.productPage + 1 , loadMoreData: true}));
            }).catch((err)=>{
                this.setState(()=>({ error: err }));
            });
            this.currentPage++;
        }
        
    }

    handleLoadMore() {
        this.getProducts();
    }
    
    render(){
        return (
            <>
                <Row className="justify-content-md-center" md={{cols:5, noGutters:false}} xs={{cols:1, noGutters:false}}>
                    {this.renderProducts()}
                </Row>
                <Row className="loadContent" className="justify-content-md-center">
                    <Col  md={{span:6, offset:3}}>
                        {this.state.error !== "" ? <h3 style = {{color: "red"}} >{this.state.error}</h3>: null}
                    </Col>
                </Row>
                <Row className="loadContent">
                    <Col  md={{span:6, offset:3}}>
                        <Button variant="dark" onClick = {this.handleLoadMore} size="lg" block disabled={ !this.state.loadMoreData }> 
                            { !this.state.loadMoreData ? <Spinner 
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                /> : "Load More" }
                        </Button>
                    </Col>
                </Row>
                
            </>
        );
    }
}

function mapStateToProps(state){
    return { products: state.products, productsPage: state.productsPage }
}

export default connect(mapStateToProps, { fetchProducts, getProductsPage, setProductsPage })(ProductsList);