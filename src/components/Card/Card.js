import React from "react";
import "./Card.scss";
import Dropdown from "./Dropdown/Dropdown";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.getMonths = () => {
      const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      for (let i = 0; i < months.length; i++) {
        if (i < 9) months[i] = "0" + months[i];
        else months[i] = String(months[i]);
      }
      return months;
    };

    this.getYears = () => {
      const year = new Date().getFullYear();
      const years = [];

      for (let i = year, j = 0; i < year + 5; i++, j++) {
        years[j] = i;
      }
      return years;
    };

    this.state = {
      months: this.getMonths(),
      years: this.getYears(),
      fields: [...Array(4).keys()]
    };
  }

  render() {
    const { cardholder, setExpiryDate, handleEvent, title } = this.props;
    const { months, years, fields } = this.state;

    return (
      <div className="card">
        <div className="card__title">{title}</div>
        {cardholder === true ? (
          <div className="card__requisites">
            <div className="card__wrapper card__wrapper_number">
              <div className="card__label">Номер карты</div>
              {fields.map(item => (
                <input
                  className="card__number"
                  type="text"
                  name={`payerNumber${item + 1}`}
                  onFocus={handleEvent("number", "focus")}
                  onChange={handleEvent("number", "change")}
                  onBlur={handleEvent("number", "blur")}
                  key={item}
                />
              ))}
            </div>
            <div className="card__wrapper">
              <div className="card__label">ФИО Держателя</div>
              <input
                className="card__cardholder"
                type="text"
                onFocus={handleEvent("cardholder", "focus")}
                onChange={handleEvent("cardholder", "change")}
                onBlur={handleEvent("cardholder", "blur")}
              />
            </div>
            <div className="card__wrapper">
              <div className="card__label">Активна до</div>
              <Dropdown
                date={months}
                setExpiryDate={setExpiryDate.bind(this, "month")}
                handleEvent={handleEvent}
              />
              <Dropdown
                date={years}
                setExpiryDate={setExpiryDate.bind(this, "year")}
                handleEvent={handleEvent}
              />
            </div>
          </div>
        ) : (
          <div className="card__requisites">
            <div className="card__wrapper card__wrapper_number">
              {fields.map(item => (
                <input
                  className="card__number"
                  type="text"
                  name={`recipientNumber${item + 1}`}
                  onFocus={handleEvent("number", "focus")}
                  onChange={handleEvent("number", "change")}
                  onBlur={handleEvent("number", "blur")}
                  key={item}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
