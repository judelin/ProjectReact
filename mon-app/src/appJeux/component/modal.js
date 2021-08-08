import React,{useState} from "react";
import { Button, Row, Col, Modal} from 'react-bootstrap';
import '../styles/modal.css';

export function Game(props) {

   
    return (
      <>
       
        <Modal
          show={props.show}
          onHide={props.onClick}
          backdrop="static"
          keyboard={false}
          centered
          className="modal-backdrop"
        >
           <Modal.Body>
            <Row className="justify-content-center"><h1>{props.fel}</h1></Row>
         
        
          <Row className="justify-content-center"><h1>{props.mess}</h1></Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClick}>
              Nouvelle partie
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

 