import React, { createContext, useState, useContext } from 'react';
import './Modal.css';
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const showModal = (message) => {
        setModalContent(message);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{ showModal, closeModal }}>
            {children}
            <Modal isOpen={modalOpen} onClose={closeModal} title="Notification">
                <p>{modalContent}</p>
            </Modal>
        </ModalContext.Provider>
    );
};

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'white', padding: 20, borderRadius: 5, width: '80%', maxWidth: 500 }}>
                <h4>{title}</h4>
                {children}
                <button onClick={onClose} style={{ float: 'right', marginTop: 10 }}>Close</button>
            </div>
        </div>
    );
};
