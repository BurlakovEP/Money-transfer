import React from "react";
import "./Dropdown.scss";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      case: false,
      value: ""
    };
  }

  buttonClick = value => {
    if (value === "hide") this.setState({ case: false });
    else this.setState({ case: !this.state.case });
  };

  selectItem = event => {
    const content = event.target.innerHTML;
    this.setState({ value: content });
    this.buttonClick("hide");
    this.props.setExpiryDate(content);
  };

  render() {
    return (
      <div className="dropdown">
        <input
          className={
            this.state.value !== ""
              ? "dropdown__field dropdown__field_valid"
              : "dropdown__field"
          }
          type="text"
          key={this.state.value}
          value={this.state.value}
          readOnly
        />
        <button className="dropdown__button" onClick={this.buttonClick}>
          <span className="dropdown__arrow"></span>
        </button>
        {this.state.case && (
          <ul className="dropdown__list">
            {this.props.date.map(item => (
              <li
                className="dropdown__item"
                onClick={this.selectItem}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
