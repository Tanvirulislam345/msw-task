import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import DetailsModals from './features/DetailsModals';
import Modals from './features/Modals';

const Problem2 = () => {
    const [openModal, setOpenModal] = useState('')
    const [show, setShow] = useState(false);
    const [isEven, setEven] = useState(false);
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('')
    const [count, setCount] = useState(5)
    const [details, setDetails] = useState()


    const handleClose = () => {
        setShow(false);
        setOpenModal('');
        setEven(false);
        setSearch('')
    };

    const handleScroll = () => {
        setCount(prev => prev += 5)
    }

    const urlFunction = () => {
        if (openModal === 'modal-1') {
            // url = 'https://contact.mediusware.com/api/contacts/';
            if (search !== '') {
                axios.get(`https://contact.mediusware.com/api/contacts/?search=${search}&page=1&page_size=${count}`)
                    .then(res => {
                        const contact = res.data.results.filter(value => isEven ? value.id % 2 == 0 : true);
                        setData(contact)
                    })
            } else {
                axios.get(`https://contact.mediusware.com/api/contacts/?page=1&page_size=${count}`)
                    .then(res => {
                        const contact = res.data.results.filter(value => isEven ? value.id % 2 == 0 : true);
                        setData(contact)
                    })
            }
        }
        else if (openModal === 'modal-2') {
            // url = 'https://contact.mediusware.com/api/country-contacts/United%20States/';
            if (search != '') {
                axios.get(`https://contact.mediusware.com/api/country-contacts/United%20States/?search=${search}&page=1&page_size=${count}`)
                    .then(res => {
                        const contact = res.data.results.filter(value => isEven ? value.id % 2 == 0 : true);
                        setData(contact)
                    })
            } else {
                axios.get(`https://contact.mediusware.com/api/country-contacts/United%20States/?page=1&page_size=${count}`)
                    .then(res => {
                        const contact = res.data.results.filter(value => isEven ? value.id % 2 == 0 : true);
                        setData(contact)
                    })
            }
        }

    }


    useEffect(() => {
        urlFunction()
    }, [openModal, isEven, count, search])


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
                {openModal === 'modal-1' && data !== null && <Modals
                    title="This is modal one"
                    show={show}
                    setShow={setShow}
                    handleScroll={handleScroll}
                    setSearch={setSearch}
                    data={data}
                    setDetails={setDetails}
                    handleClose={handleClose}
                    setOpenModal={setOpenModal}
                    isEven={isEven}
                    setEven={setEven}
                />}
                {openModal === 'modal-2' && data !== null && <Modals
                    title="This is modal two"
                    show={show}
                    setShow={setShow}
                    setSearch={setSearch}
                    data={data}
                    handleScroll={handleScroll}
                    setDetails={setDetails}
                    handleClose={handleClose}
                    setOpenModal={setOpenModal}
                    isEven={isEven}
                    setEven={setEven}
                />}
                {openModal === 'modal-3' && <DetailsModals
                    show={show}
                    setShow={setShow}
                    details={details}
                    handleClose={handleClose}
                    setOpenModal={setOpenModal}
                />}

            </div>
        </div>
    );
};

export default Problem2;