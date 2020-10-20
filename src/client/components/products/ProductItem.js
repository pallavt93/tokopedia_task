import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductItem = (props) => {
    let product = props.product;
    return (
        <div onClick = {() => {props.history.push(`/pdp/${product.id}`)}} >
            <Card>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <p>Price: Rs.{product.price}</p>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ProductItem;