import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
       <div className={css.error}>
         <p>Ой, сталася помилка, спробуйте перезавантажити сторінку 😭</p>
      </div>
    );
   };

export default ErrorMessage; 