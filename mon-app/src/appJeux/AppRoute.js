import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Row, Col, Container} from 'react-bootstrap';

//import Tabl from './component/Tabl';
//import AppT from './component/TablM'
import AppT from './appTictato'
//import AppT from "./appTict";
import AppQ from './JeuTaquin';
import './styles.css';


import AppE from './AppEchec2';
import AppM from './AppMemoire';

import AppSudoku from "./appSudoku";
import App2048 from "./App2048";


export default function BasicExample() {
    return (
        <Router>
          
 <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >

  <Navbar.Brand to="/" as={Link}>React-Jeux</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mx-auto">
   
     <NavDropdown title="Jeux" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/">Titacto</NavDropdown.Item>
          <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/memoire">Memoire</NavDropdown.Item>
          <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/taquin">Taquin</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/echec">Echec</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/sudoku">Sudoku</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/2048">2048</NavDropdown.Item>
       
      </NavDropdown>
   
    </Nav>
      </Navbar.Collapse>

    </Navbar>

               <Switch>
                    <Route exact path="/">
                        <Titacto />
                    </Route>
                    <Route path="/memoire">
                        <Memoire />
                    </Route>
                    <Route path="/taquin">
                        <Taquin />
                    </Route>
                    <Route path="/echec">
                        <Echec />
                    </Route>
                    <Route path="/sudoku">
                        <Sudoku />
                    </Route>
                    <Route path="/2048">
                        <App20 />
                    </Route>
                </Switch>
          
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Taquin() {
    return (
        <Container>
           
                <h1 >Jeu Taquin</h1>
            

                <AppQ />


           

        </Container>
    );
}

function Echec() {
    return (
        <Container>
            <Row>
                <h1 >Jeu Echec</h1>
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
           
                <h1 >Jeu Memoire</h1>
           

                <AppM />


            

        </Container>
    );
}

function Titacto() {
    return (
        <Container>
          
             <h1>Jeu Titacto</h1>
           

            <div className="wrape">
  
        <AppT/>
    
    </div>

        </Container>
    );//
}

function Sudoku() {
    return (
        <Container>
          
             <h1>Jeu Sudoku</h1>
           

            <div className="wrape">
  
        <AppSudoku/>
    
    </div>

        </Container>
    );//
}

function App20() {
    return (
        <Container>
          
             <h1>Jeu 2048</h1>
           

            <div className="wrape">
  
        <App2048 n ={4}/>
    
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