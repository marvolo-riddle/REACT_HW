import React from "react";

class FormDataTable extends React.Component {
  render() {
    const { data, onBackClick } = this.props;

    const sortedData = data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    return (
      <div className="FormDataTable">
        <table className="table">
          <tbody>
            {sortedData.map((item, index) => {
              if (item.value === "" || item.value == null) {
                return null;
              }
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => onBackClick(data)}
        >
          Back
        </button>
      </div>
    );
  }
}

export default FormDataTable;
