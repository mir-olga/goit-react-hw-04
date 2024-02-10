export const ImageGallery = ({ items }) => {

	
return (
	<ul>
		{items.map(item => (
			<li key={item.objectID}>
				<a href={item.url}>{item.title}</a>
			</li>
		))}
	</ul>
);


/*return (
    <ul>
	{/* Набір елементів списку із зображеннями }
	<li>
		<div>
		<img src="" alt="" />
		</div>
	</li>
</ul>
)*/
}