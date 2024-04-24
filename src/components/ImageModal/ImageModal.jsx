import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "500px",
    width: "500px",
    },
  };

const ImageModal = ({ closeModal, modalIsOpen, src, alt}) => {

    return (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div>
              <img src={src} alt={alt}/>
            </div>
          </Modal>
      );
};
export default ImageModal;

Modal.setAppElement("#root");