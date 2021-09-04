import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

export default function Statistics(props) {
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
