import s from './Notification.module.css';

function Notification({ message }) {
  return <p className={s.notification}>{message}</p>;
}

export default Notification;
