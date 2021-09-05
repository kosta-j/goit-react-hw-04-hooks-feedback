import PropTypes from 'prop-types';
import s from './Title.module.css';

export default function Title({ title }) {
  return <h2 className={s.title}>{title}</h2>;
}

Title.propTypes = {
  title: PropTypes.string,
};
