import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <ul className={s.statistics}>
      <li className={s.item}>
        <StatisticsItem name="Good" value={good} />
      </li>
      <li className={s.item}>
        <StatisticsItem name="Neutral" value={neutral} />
      </li>
      <li className={s.item}>
        <StatisticsItem name="Bad" value={bad} />
      </li>
      <li className={s.item}>
        <StatisticsItem name="Total" value={total} />
      </li>
      <li className={s.item}>
        <StatisticsItem
          name="Positive feedback"
          value={positivePercentage}
          percents={true}
        />
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
