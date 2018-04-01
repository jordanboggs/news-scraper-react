import React, { Component } from 'react';
import API from '../utils/API';
import { Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Headlines extends Component {
  // Initialize this.state.headlines as empty array
  state = {
    headlines: []
  }

  componentDidMount() {
    this.loadHeadlines;
  }

  // Load headlines from databse
  loadHeadlines = () => {
    API.getHeadlines()
    .then((res) => this.setState({ headlines: res.data }))
    .catch((err) => console.error(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus augue sem, nec pellentesque purus finibus nec. Mauris ut pulvinar mi, sit amet interdum lorem. Duis vel fermentum purus. Suspendisse et efficitur sapien. Donec aliquet augue id nulla suscipit ultricies. Mauris eros lectus, ullamcorper et dapibus nec, porttitor vitae mi. Nullam lacinia venenatis ipsum non venenatis. Morbi feugiat dui ut metus mattis consectetur.</p>
          </Jumbotron>
        </Row>
        {/* <Row>
          <HeadlineList />
        </Row> */}
      </Container> 
    );
  }
}

export default Headlines;
