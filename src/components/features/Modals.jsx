import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InfiniteScroll from 'react-infinite-scroll-component';


const Modals = ({ title, show, setShow, setSearch, data, handleScroll, setDetails, handleClose, setOpenModal, isEven, setEven }) => {


    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header>
                <Modal.Title >{title}</Modal.Title>
                <input type="search" placeholder='search' onChange={(e) => setSearch(e.target.value)} />

            </Modal.Header>
            <Modal.Body >
                <InfiniteScroll
                    dataLength={data?.length}
                    next={handleScroll}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    height={"10rem"}
                >
                    {
                        data?.map(contact => <p
                            key={contact.id}
                            style={{ padding: "2px", margin: "2px", border: "1px solid red" }}
                            onClick={() => {
                                setOpenModal("modal-3")
                                setDetails(contact)
                                setShow(true)
                            }}
                        >
                            {
                                contact.phone
                            }
                        </p>)
                    }

                </InfiniteScroll>


            </Modal.Body>
            <Modal.Footer>
                <Form>
                    <Form.Check
                        type="checkbox"
                        id="custom-switch"
                        label="Only Even"
                        onChange={() => setEven(!isEven)}
                    />

                </Form>
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


export default Modals;