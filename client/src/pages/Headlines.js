import React, { Component } from 'react';
import API from '../utils/API';
import { Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { HeadlineList, HeadlineListItem } from "../components/List";

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
      <Container>
        <Row>
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus augue sem, nec pellentesque purus finibus nec. Mauris ut pulvinar mi, sit amet interdum lorem. Duis vel fermentum purus. Suspendisse et efficitur sapien. Donec aliquet augue id nulla suscipit ultricies. Mauris eros lectus, ullamcorper et dapibus nec, porttitor vitae mi. Nullam lacinia venenatis ipsum non venenatis. Morbi feugiat dui ut metus mattis consectetur.</p>
          </Jumbotron>
        </Row>
        <Row>
          {this.state.headlines.length ? (
            <HeadlineList>
              {this.state.headlines.map((headline) => (
                <HeadlineListItem key={headline._id}>
                  <a href={headline.link} 
                     id={headline._id} 
                     target="_blank">{headline.title}
                  </a>
                  <p>{headline.description}</p>
                </HeadlineListItem>
              ))}
            </HeadlineList>
          ) : (
            <h3>No headlines to display.</h3>
          )}
        </Row>
      </Container> 
    );
  }
}

export default Headlines;
