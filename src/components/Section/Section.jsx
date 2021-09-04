import s from './Section.module.css';
import Title from '../Title/Title';

export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <Title title={title} />
      {children}
    </section>
  );
}
