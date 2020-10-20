import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import  Rating  from 'react-rating';

const ProductDetails = (props) => {
    let product = props.product;
    return (
        <Container>
            <Row className="justify-content-md-center" md={{cols:2, noGutters:false}}>
                <Col md={{span:2}} ><Image src={product.img} fluid rounded /></Col>
                <Col md={{span:10}} >
                    <Row>
                        <Col md={{span:2}}><div style={{fontWeight: 600}}>Name</div></Col>
                        <Col md={{span:10}}>{product.name}<hr/></Col>
                    </Row>
                    <Row>
                        <Col md={{span:2}}><div style={{fontWeight: 600}}>Rating</div></Col>
                        <Col md={{span:10}}>
                        <Rating
                            emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" className="icon" />}
                            fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className="icon" />}
                            initialRating={product.rating}
                            readonly
                        />
                        <hr/></Col>
                    </Row>
                    <Row>
                        <Col md={{span:2}}><div style={{fontWeight: 600}}>Price</div></Col>
                        <Col md={{span:10}}>{product.price}<hr/></Col>
                    </Row>
                    <Row>
                        <Col md={{span:2}}><div style={{fontWeight: 600}}>Description</div></Col>
                        <Col md={{span:10}}>{product.description}<hr/></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;