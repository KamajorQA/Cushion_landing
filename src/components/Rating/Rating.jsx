import { Stars } from '../../icons/Stars';
import './style.css';

function Rating() {
  return (
    <section className="rating-container">
      <div className="rating-stars">
        <Stars className="stars-instance" />
        <Stars className="stars-instance" />
        <Stars className="stars-instance" />
        <Stars className="stars-instance" />
        <Stars className="stars-instance" />
      </div>
      <div className="rating-feedback">(10)</div>
    </section>
  );
}

export { Rating };
