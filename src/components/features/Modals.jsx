import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Modals = ({ title, show, setShow, handleClose, setOpenModal, isEven, setEven }) => {


    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Form>
                    <Form.Check
                        type="checkbox"
                        id="custom-switch"
                        label="Only Even"
                        onChange={() => setEven(!isEven)}
                    />

                </Form>
                <Button variant="primary" onClick={() => {
                    setOpenModal("modal-1")
                    setShow(true)
                }}>
                    All Contact
                </Button>
                <Button variant="primary" onClick={() => {
                    setOpenModal("modal-2")
                    setShow(true)
                }}>
                    Us Contact
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>


            </Modal.Footer>
        </Modal>

    );
}


export default Modals;