import css from './Statistics.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.detailList}>
        <li>Good: {good}</li>
        <li>Natural: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      
      <ul className={css.totalList}>
        <li>Total: {total}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.types = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
