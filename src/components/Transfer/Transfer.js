import React from "react";
import "./Transfer.scss";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

export default class Transfer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 0
    };
  }

  clickHandler = () => {
    let clickCount = this.state.click;
    if (this.props.state.isValid) this.props.setTableRow("add");
    else this.setState({ click: (clickCount += 1) });
  };

  render() {
    const { state, handleEvent, setExpiryDate } = this.props;

    return (
      <div className="transfer">
        <div className="transfer__content">
          {this.state.click > 0 && !state.isValid && (
            <div className="transfer__message">Не все реквизиты заполнены!</div>
          )}
          <div className="transfer__form transfer__form_cards">
            <Card
              title="Карта плательщика"
              cardholder={true}
              handleEvent={handleEvent}
              setExpiryDate={setExpiryDate}
            />
            <Card
              title="Карта получателя"
              cardholder={false}
              handleEvent={handleEvent}
            />
          </div>
          <div className="transfer__form transfer__form_transfer">
            <input
              className="transfer__amount"
              type="text"
              placeholder="Сумма"
              onFocus={handleEvent("amount", "focus")}
              onChange={handleEvent("amount", "change")}
              onBlur={handleEvent("amount", "blur")}
            />
            <NavLink
              className="transfer__button"
              to={state.isValid ? "/history" : "/transfer"}
              onClick={this.clickHandler}
            >
              Перевести
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
