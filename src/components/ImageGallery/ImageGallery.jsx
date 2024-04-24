import  ImageCard  from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, openModal }) => {
	
return (
	<ul className={css.listImg}>
		{items.map(({ id, urls: { small, regular }, alt_description }) => (
			<li key={id} >
					<ImageCard  
					small={small}
					descr={alt_description} 
					openModal={openModal}
					regular={regular}
				/>
			</li>
		))}
	</ul>  
);
}

export default ImageGallery;