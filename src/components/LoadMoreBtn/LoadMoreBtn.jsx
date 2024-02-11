import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({handleLoadMore}) => {
	
    return (
        <div className={css.loadMoreBtn}>
            <button onClick={handleLoadMore}>Load more</button>
        </div>     
    );
}

export default LoadMoreBtn;