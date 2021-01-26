import React from 'react'
import { Form } from 'semantic-ui-react'

class Search extends React.Component {
  render() {
    return (
      <Form
        onSubmit={this.props.handleSubmit} 
      >
        <Form.Input 
          size='huge' 
          onChange={this.props.handleText} 
          icon='search' 
          placeholder='Search...' 
        />
      </Form>
    );
  }
}

export default Search