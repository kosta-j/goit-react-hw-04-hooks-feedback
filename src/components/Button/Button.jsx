import s from './Button.module.css';

export default function Button({ buttonText, onClick }) {
  return (
    <button type="button" className={s.btn} onClick={onClick}>
      {buttonText}
    </button>
  );
}
