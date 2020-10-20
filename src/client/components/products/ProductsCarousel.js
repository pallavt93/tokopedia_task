import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';

const ProductsCarousel = (props) => {
    return (
        <>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.initialAppData.carousel[0].url}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.initialAppData.carousel[1].url}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.initialAppData.carousel[2].url}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.initialAppData.carousel[3].url}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.initialAppData.carousel[4].url}
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
      );
}

function mapStateToProps(state){
    return { initialAppData: state.initialAppData };
}

export default connect(mapStateToProps)(ProductsCarousel);