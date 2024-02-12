import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ImageModal = ({ closeModal, modalIsOpen, src, alt}) => {

    return (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h2 >Hello</h2>
            <button onClick={closeModal}>close</button>
            <img src={src} alt={alt}/>
          </Modal>
      );
}
export default ImageModal;

Modal.setAppElement("#root");