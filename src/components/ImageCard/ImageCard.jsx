import css from './ImageCard.module.css';

const ImageCard = ({ small, descr, openModal, regular }) => {

    return (
            <div> 
               <img onClick={() => openModal({ urls: regular, alt: descr })}
                className={css.imageCard}
                src={small}
                alt={descr}
            />
             </div>
    );
}

export default ImageCard;