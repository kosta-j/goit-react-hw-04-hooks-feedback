import PropTypes from 'prop-types';
import Button from '../Button/Button';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.buttonList}>
      {options.map(option => (
        <li key={option} className={s.item}>
          <Button buttonText={option} onClick={() => onLeaveFeedback(option)} />
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
