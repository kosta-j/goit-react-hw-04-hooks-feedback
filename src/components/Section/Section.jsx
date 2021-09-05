import PropTypes from 'prop-types';
import Title from '../Title/Title';
import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <Title title={title} />
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
