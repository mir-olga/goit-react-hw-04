import css from './ImageCard.module.css';

const ImageCard = ({ item }) => {
	
    return (
        <div>
            <img src={item.urls.small} alt={item.username} className={css.imageCard}/>
        </div>     
    );
}

export default ImageCard;