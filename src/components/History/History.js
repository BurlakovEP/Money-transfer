import React from "react";
import "./History.scss";
import { NavLink } from "react-router-dom";

export default class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: [
        "№",
        "Карта плательщика",
        "Карта получателя",
        "Сумма",
        "Дата выполнения",
        "Действие"
      ]
    };
  }
  render() {
    const { rows } = this.props.state;
    const { header } = this.state;

    return (
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            {header.map(cell => (
              <td
                className="table__cell table__cell_header"
                key={header.indexOf(cell)}
              >
                {cell}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {rows.map(cell => (
            <tr className="table__row" key={rows.indexOf(cell)}>
              <td className="table__cell">{rows.indexOf(cell) + 1}</td>
              <td className="table__cell">{cell.payerNumber}</td>
              <td className="table__cell">{cell.recipientNumber}</td>
              <td className="table__cell">{cell.amount}</td>
              <td className="table__cell">{cell.date}</td>
              <td className="table__cell">
                <NavLink className="table__button" to="/transfer">
                  Повторить
                </NavLink>
                <button
                  className="table__button"
                  onClick={this.props.setTableRow.bind(
                    this,
                    "remove",
                    rows.indexOf(cell)
                  )}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
