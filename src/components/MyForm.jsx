import React from "react";
import FormDataTable from "./FormDataTable.jsx";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      address: "",
      city: "",
      country: "",
      password: "",
      acceptRules: "",
      isFormSubmitted: false,
      tableData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  handleButtonClick = (event) => {
    event.preventDefault();

    this.setState((prevState) => ({
      tableData: [
        { name: "email", value: prevState.email },
        { name: "address", value: prevState.address },
        { name: "city", value: prevState.city },
        { name: "country", value: prevState.country },
        { name: "password", value: prevState.password },
        {
          name: "acceptRules",
          value: prevState.acceptRules ? "true" : "false",
        },
      ],
      isFormSubmitted: true,
      email: "",
      address: "",
      city: "",
      country: "",
      password: "",
      acceptRules: false,
    }));
  };

  handleBackClick() {
    const { tableData } = this.state;

    const updatedData = tableData.reduce((acc, obj) => {
      acc[obj.name] = obj.value === "true" ? "true" : obj.value;
      return acc;
    }, {});

    this.setState({ ...updatedData, isFormSubmitted: false });
  }

  render() {
    const { isFormSubmitted, tableData } = this.state;

    return (
      <div className="container">
        <form name="myForm">
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="col-form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="col-form-label">
              Address
            </label>
            <textarea
              type="text"
              className="form-control"
              name="address"
              id="address"
              placeholder="1234 Main St"
              onChange={this.handleChange}
              value={this.state.address}
            ></textarea>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="col-form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="city"
              onChange={this.handleChange}
              value={this.state.city}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="col-form-label">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.country}
            >
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="rules">
                <input
                  id="rules"
                  type="checkbox"
                  name="acceptRules"
                  className="form-check-input"
                  onChange={this.handleChange}
                />
                Accept Rules
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleButtonClick}
          >
            Sign in
          </button>
        </form>
        {isFormSubmitted && (
          <FormDataTable
            data={tableData}
            onBackClick={this.handleBackClick}
          ></FormDataTable>
        )}
      </div>
    );
  }
}

export default MyForm;
