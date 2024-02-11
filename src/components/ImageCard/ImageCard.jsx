const ImageCard = ({ item }) => {
	
    return (
        <div>
            <img src={item.urls.small} alt={item.username} />
        </div>     
    );
}

export default ImageCard;