import React from "react";
import "./App.scss";
import { Route, HashRouter, NavLink, Redirect } from "react-router-dom";

import Transfer from "./components/Transfer/Transfer";
import History from "./components/History/History";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let parsed = JSON.parse(localStorage.getItem("state"));
    if (parsed === null) parsed = [];

    this.setTableRow = (action, index) => {
      if (action === "add") {
        let {
          payerNumber1,
          payerNumber2,
          payerNumber3,
          payerNumber4,
          recipientNumber1,
          recipientNumber2,
          recipientNumber3,
          recipientNumber4
        } = this.state;

        let obj = {
          payerNumber: `${payerNumber1} ${payerNumber2} ${payerNumber3} ${payerNumber4}`,
          recipientNumber: `${recipientNumber1} ${recipientNumber2} ${recipientNumber3} ${recipientNumber4}`,
          amount: this.state.amount,
          date: this.state.date
        };

        parsed.push(obj);
      }
      if (action === "remove") {
        parsed.splice(index, 1);
      }

      this.setState({ rows: parsed });

      let serial = JSON.stringify(parsed);
      localStorage.setItem("state", serial);

      this.clearState();
    };

    this.state = {
      payerNumber1: null,
      payerNumber2: null,
      payerNumber3: null,
      payerNumber4: null,
      cardholder: null,
      expiryMonth: null,
      expiryYear: null,
      recipientNumber1: null,
      recipientNumber2: null,
      recipientNumber3: null,
      recipientNumber4: null,
      amount: null,
      isValid: false,
      date: new Date().toLocaleDateString(),
      rows: parsed
    };
  }

  clearState = () => {
    this.setState({
      payerNumber1: null,
      payerNumber2: null,
      payerNumber3: null,
      payerNumber4: null,
      cardholder: null,
      expiryMonth: null,
      expiryYear: null,
      recipientNumber1: null,
      recipientNumber2: null,
      recipientNumber3: null,
      recipientNumber4: null,
      amount: null,
      isValid: false
    });
  };

  setValid = () => {
    const { date, rows, isValid, ...obj } = this.state;

    const value = Object.keys(obj).every(key => obj[key] !== null);
    this.setState({ isValid: value });
  };

  setData = (field, value, name) => {
    if (field === "amount") this.setState({ amount: value });
    if (field === "cardholder") this.setState({ cardholder: value });
    if (field === "number") this.setState({ [name]: value });
  };

  setExpiryDate = (field, value) => {
    if (field === "month") {
      this.setState({ expiryMonth: value }, () => this.setValid());
    }

    if (field === "year") {
      this.setState({ expiryYear: value }, () => this.setValid());
    }
  };

  handleEvent = (field, state) => event => {
    const { value, name } = event.target;
    const patternAmount = value.match(/^\d{1,5}(\.\d{0,2})?$/);
    const patternCardholder = value.match(/^[A-Za-z]{1,10}$/);
    const patternNumber = value.match(/^\d{4}$/);

    if (state === "focus" && value === "") this.changeClass(event, "focus");

    if (state === "change") {
      if (field === "amount" && patternAmount) {
        this.changeClass(event, "valid");
        this.setData("amount", value, null);
      } else if (field === "cardholder" && patternCardholder) {
        this.changeClass(event, "valid");
        this.setData("cardholder", value, null);
      } else if (field === "number" && patternNumber) {
        this.changeClass(event, "valid");
        this.setData("number", value, name);
      } else {
        this.changeClass(event, "invalid");
        if (field === "number") {
          this.setData("number", null, name);
        } else {
          this.setData(field, null, null);
        }
      }
    }

    if (state === "blur") {
      if (value !== "") this.setValid();
      else if (value === "") {
        this.changeClass(event, "blur");
        this.setValid();
      } else if (
        (field === "amount" && !patternAmount) ||
        (field === "cardholder" && !patternCardholder) ||
        (field === "number" && !patternNumber)
      ) {
        this.changeClass(event, "blur");
      } else {
        this.setValid();
      }
    }
  };

  changeClass = (event, state) => {
    const target = event.target;
    target.className = target.classList[0];
    if (state !== "blur") target.classList.add(`${target.className}_${state}`);
  };

  render() {
    return (
      <HashRouter>
        <div className="app">
          <header className="app__header">
            <h1 className="app__headline">Переводы с карты на карту</h1>
            <div className="app__navbar">
              <NavLink
                className="app__link"
                activeClassName="app__link_active"
                to="/transfer"
              >
                Создание перевода
              </NavLink>
              <NavLink
                className="app__link"
                activeClassName="app__link_active"
                to="/history"
              >
                История
              </NavLink>
            </div>
          </header>
          <main className="app__body">
            <Route path="/">
              <Redirect to="/transfer" />
            </Route>
            <Route path="/transfer">
              <Transfer
                state={this.state}
                setExpiryDate={this.setExpiryDate}
                setTableRow={this.setTableRow}
                handleEvent={this.handleEvent}
              />
            </Route>
            <Route path="/history">
              <History state={this.state} setTableRow={this.setTableRow} />
            </Route>
          </main>
        </div>
      </HashRouter>
    );
  }
}
