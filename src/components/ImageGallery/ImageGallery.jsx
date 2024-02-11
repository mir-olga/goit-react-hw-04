import  ImageCard  from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
	
return (
	<ul className={css.listImg}>
		{items.map(item => (
			<li key={item.id}>
				<ImageCard item={item}/>
			</li>
		))}
	</ul>  
);
}

export default ImageGallery;