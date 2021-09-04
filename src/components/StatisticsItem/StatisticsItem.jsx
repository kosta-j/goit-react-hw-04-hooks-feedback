import s from './StatisticsItem.module.css';

export default function StatisticsItem({ name, value, percents }) {
  return (
    <div className={s.statisticsItem}>
      {name}: {value} {percents && '%'}
    </div>
  );
}
