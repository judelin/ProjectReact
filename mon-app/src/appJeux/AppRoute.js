import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Row, Col, Container} from 'react-bootstrap';

//import Tabl from './component/Tabl';
import AppT from './component/TablM'
import AppQ from './JeuTaquin';
import './styles.css';


import AppE from './AppEchec2';
import AppM from './AppMemoire2';

export default function BasicExample() {
    return (
        <Router>
          
 <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >

  <Navbar.Brand to="/" as={Link}>React-Jeux</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mx-auto">
   
     <NavDropdown title="Jeux" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/">Taquin</NavDropdown.Item>
          <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/memoire">Memoire</NavDropdown.Item>
          <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/titacto">Titacto</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/echec">Echec</NavDropdown.Item>
      
       
      </NavDropdown>
   
    </Nav>
      </Navbar.Collapse>

    </Navbar>

               <Switch>
                    <Route exact path="/">
                        <Taquin />
                    </Route>
                    <Route path="/memoire">
                        <Memoire />
                    </Route>
                    <Route path="/titacto">
                        <Titacto />
                    </Route>
                    <Route path="/echec">
                        <Echec />
                    </Route>
                </Switch>
          
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Taquin() {
    return (
        <div>
           
                <h1 >Jeux Taquin</h1>
            

                <AppQ />


           

        </div>
    );
}

function Echec() {
    return (
        <Container>
            <Row>
                <h1 >Jeux Echec</h1>
            </Row>
            <Row>

                <AppE />


            </Row>

        </Container>
    );
}

function Memoire() {
    return (
        <Container>
           
                <h1 >Jeux Memoire</h1>
           

                <AppM />


            

        </Container>
    );
}

function Titacto() {
    return (
        <Container>
          
             <h1>Jeux Titacto</h1>
           

            <div className="wrape">
  
        <AppT/>
    
    </div>

        </Container>
    );//
}


/*
      <Row className="justify-content-md-center">
    <Col xs={12} sm={4} md={2}>
        <AppT/>
    </Col>
</Row>
*/