import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap';

export default (props) => {
    let history = props.history;
    return (
        <header className="header">
            <div>
                <img
                    src={props.logo}
                    width="100"
                    height="30"
                    className="headerlogo"
                    alt="logo"
                />
            </div>
            <div className="navbuttons">
                { history.location.pathname !== "/" ? <Button variant="outline-primary" className="nav-buttons" onClick={()=>{ history.push("/") }}>Back</Button>: null }
            </div>
        </header>
    );
};




{/* <div>
            <Navbar bg="dark" className="header">
                <div>
                    <Navbar.Brand href="/">
                        <img
                            src={props.logo}
                            width="100"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </div>
                <div className="navbuttons">
                    { history.location.pathname !== "/" ? <Button type="bg-dark" className="nav-buttons" onClick={()=>{ history.push("/") }}>Back</Button>: null }
                </div>
                
                
                
            </Navbar>
        </div> */}