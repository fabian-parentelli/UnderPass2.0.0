import './modalCustom.scss';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalCustom = ({ modalIsOpen, closeModal, children }) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="modalCustom"
            overlayClassName="Overlay"
        >
            {children}
        </Modal >
    );
};

export default ModalCustom;