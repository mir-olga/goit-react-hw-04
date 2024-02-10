import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === '') {
      toast.error('Введіть слово для пошуку!');
     return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
        <header className={css.header}>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Пошук картинок та фото"
            className={css.barInput}
            />
            <button type="submit">Пошук</button>
        </form>
        </header>
  );
};