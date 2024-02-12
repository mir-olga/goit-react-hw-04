import css from './ImageCard.module.css';

const ImageCard = ({ item, openModal }) => {
	
    return (
        <div>
            <img src={item.urls.small} alt={item.username} className={css.imageCard}
            onClick={() => openModal({item})}/>
        </div>     
    );
}

export default ImageCard;