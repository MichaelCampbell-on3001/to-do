import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddItem.js';
import Items from './components/Items.js';



let SERVER = process.env.REACT_APP_SERVER;



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    await axios.post(`${SERVER}/items`, item);
    this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${SERVER}/items`);
    const items = response.data;
    this.setState({ items });
  }

  deleteItem = async (id) => {
    let url = `${SERVER}/items/${id}`;
      await axios.delete(url)
        this.getItems();
 
  }


  async componentDidMount() {
  await this.getItems();
}

render() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">To-Do-List</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col><h1>Our Items</h1></Col>
        </Row>
        <Row>
          <Col md="auto">
            <Form handleAddItem={this.addItem} />
          </Col>
          <Col>
            <Items itemsList={this.state.items} deleteItem={this.deleteItem} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
}

export default App;