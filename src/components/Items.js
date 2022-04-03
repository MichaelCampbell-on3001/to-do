import { Component } from 'react';
import { Accordion} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';


class Items extends Component {

  render() {

    return (
      <section>
        <Accordion>
          
         <h2>Items...</h2>
          {
              this.props.itemsList.map((item, idx) =>
                <Item key={item._id} itemData={item} deleteItem={this.props.deleteItem} />
              )
            }
        </Accordion>

      </section >
    );
  }
}

class Item extends Component {

  render() {

    return (


      <Accordion.Item eventKey={this.props.itemData._id}>
      
        
          <Accordion.Header> {this.props.itemData.name}</Accordion.Header>
          <Accordion.Body>{this.props.itemData.description}</Accordion.Body>
                <Button onClick={() => this.props.deleteItem(this.props.itemData._id)}>Delete Item</Button>
          
      
        </Accordion.Item>
    );
  }
}

export default Items;