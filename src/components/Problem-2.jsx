import React, { useState } from 'react';
import Modals from './features/Modals';

const Problem2 = () => {
    const [openModal, setOpenModal] = useState('')
    const [show, setShow] = useState(false);
    const [isEven, setEven] = useState(false);
    // console.log(openModal);
    // console.log(show);
    // console.log(isEven);
    const handleClose = () => {
        setShow(false)
        setOpenModal('');
        setEven(false)
    };





    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary"
                        type="button"
                        onClick={() => {
                            setOpenModal('modal-1')
                            setShow(true)
                        }}
                    >
                        All Contacts
                    </button>
                    <button className="btn btn-lg btn-outline-warning"
                        type="button"
                        onClick={() => {
                            setOpenModal('modal-2')
                            setShow(true)
                        }}
                    >
                        US Contacts
                    </button>
                </div>
                {openModal === 'modal-1' && <Modals
                    title="This is modal one"
                    show={show}
                    setShow={setShow}
                    handleClose={handleClose}
                    setOpenModal={setOpenModal}
                    isEven={isEven}
                    setEven={setEven}
                />}
                {openModal === 'modal-2' && <Modals
                    title="This is modal two"
                    show={show}
                    setShow={setShow}
                    handleClose={handleClose}
                    setOpenModal={setOpenModal}
                    isEven={isEven}
                    setEven={setEven}
                />}
                {openModal === 'modal-3' && <Modals
                    title="This is modal Three"
                    show={show}
                    setShow={setShow}
                    handleClose={handleClose}
                    setOpenModal={setOpenModal}
                />}

            </div>
        </div>
    );
};

export default Problem2;