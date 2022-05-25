import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { admins: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(admins) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin =>
            <tr key={admin.adminId}>
              <td>{admin.adminFirstName}</td>
              <td>{admin.adminLastName}</td>
              <td>{admin.adminMobile}</td>
              <td>{admin.adminEmail}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.admins);

    return (
      <div>
        <h1 id="tabelLabel" >Administrators list</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('api/administrators');
    const data = await response.json();
    this.setState({ admins: data, loading: false });
  }
}
