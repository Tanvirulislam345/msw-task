import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const DetailsModals = ({ show, setShow, details, handleClose, setOpenModal }) => {


    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header>
                <Modal.Title >This is modal Three</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <p style={{ padding: "2px", margin: "2px", border: "1px solid red" }}>Id - {details.id}</p>
                <p style={{ padding: "2px", margin: "2px", border: "1px solid red" }}>Country Name -{details.country.name}</p>
                <p style={{ padding: "2px", margin: "2px", border: "1px solid red" }}>Phone - {details.phone}</p>


            </Modal.Body>
            <Modal.Footer>

                <Button
                    onClick={() => {
                        setOpenModal("modal-1")
                        setShow(true)
                    }}
                    style={{ background: "#46139f" }}
                >
                    All Contact
                </Button>
                <Button
                    onClick={() => {
                        setOpenModal("modal-2")
                        setShow(true)
                    }}
                    style={{ background: "#ff7f50" }}
                >
                    Us Contact
                </Button>
                <Button
                    onClick={handleClose}
                    style={{ background: "#46139f" }}
                >
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    );
}


export default DetailsModals;