import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.header}>{title}</h2>
      {children}
    </section>
  );
};

Section.types = {
  title: PropTypes.string.isRequired,
}
