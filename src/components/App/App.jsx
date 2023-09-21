import { Countdown } from '../Countdown/Countdown';
import { Slider } from '../Slider/Slider';
import { Select } from '../Select/Select';
import { Rating } from '../Rating/Rating';
import { Button } from '../Button/Button';
import trustPilot from '../../assets/img/group-147.png';
import './style.css';

export const App = () => {
  const optionsColor = ['Black', 'Orange', 'Pink', 'Yellow'];

  const optionsSize = [2, 3, 4, 5];

  return (
    <div className="slippers">
      <main className="main-container">
        <header className="header">
          <div className="header-wrapper">
            <p className="p">
              🇿🇦 SPECIAL OFFER + FREE DELIVERY 2-4 DAYS IN SA 🇿🇦
            </p>
          </div>
        </header>
        <div className="under-header">
          <div className="logo">
            <div className="ellipse-wrapper">
              <div className="ellipse" />
            </div>
            <div className="text-wrapper-9">orthopedic slippers</div>
          </div>
        </div>
        <div className="frame">
          <div className="trust-icons">
            <a
              href="https://github.com/KamajorQA/"
              target="_blank"
              rel="noreferrer"
              className="text-wrapper-2"
            >
              best selling
            </a>
            <img className="trust-pilot" alt="trust-pilot" src={trustPilot} />
            <div className="text-wrapper-3">Excellent 4.8/5</div>
          </div>
          <div className="product-title">ORTHOPEDIC SLIPPERS</div>

          <Slider />

          <div className="description">
            <p className="fast-delivery">
              <span className="span">Fast Delivery:</span>
              <span className="text-wrapper-4"> 2-4 days from SA 🇿🇦</span>
            </p>
            <p className="in-stock-shipping">
              <span className="span">In Stock:</span>
              <span className="text-wrapper-4">
                {' '}
                Shipping from Johannesburg 🇿🇦
              </span>
            </p>

            <Rating />
          </div>

          <section className="select-group">
            <Select options={optionsColor} selectTitle="color" />
            <Select options={optionsSize} selectTitle="size" />
          </section>

          <Button />
        </div>

        <div className="banner">
          <Countdown />

          <div className="frame-5">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="old-price">R 250.00</div>
              </div>
            </div>
            <div className="text-wrapper-8">R 160.00</div>
          </div>
        </div>
      </main>
    </div>
  );
};
