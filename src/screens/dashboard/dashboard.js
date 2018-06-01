import React from 'react';
import { PageHeader, Panel, Button } from 'react-bootstrap';

class Dashboard extends React.Component {

  constructor(props) {
      super(props);
      this.state={prescriptions: []}
    }

  componentWillMount() {
    const { email } = this.props.location.state;
    return fetch('http://localhost:8080/prescription/' + email)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          prescriptions: responseJson
        })
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const prescriptions = this.state.prescriptions.map((rx) =>
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">New Prescription</Panel.Title>
      </Panel.Heading>
      <Panel.Body>Email: {rx.email}</Panel.Body>
      <Panel.Body>Date: {rx.date}</Panel.Body>
      <Panel.Body>Image: {rx.image}</Panel.Body>
      <Panel.Body>Status: {rx.status}</Panel.Body>
      <Panel.Body>
        <Button onClick={() => this.viewRx(rx)} bsStyle="primary">View Prescription</Button>
      </Panel.Body>
    </Panel>
    );
    return(
      <div className="container">
        <PageHeader>Prescriptions</PageHeader>
        {prescriptions}
      </div>
    );
  }

  viewRx(rx){
    
  }
}

export default Dashboard;
