import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

export default function StatisticsItem({ name, value, percents }) {
  return (
    <div className={s.statisticsItem}>
      {name}: {value} {percents && '%'}
    </div>
  );
}

StatisticsItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  percents: PropTypes.bool,
};
