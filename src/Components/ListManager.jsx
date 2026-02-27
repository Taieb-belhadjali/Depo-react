import React from 'react';


class ListManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.initialItems,
      newItem: ''
    };
    this.placeholder = props.placeholder;
  }

  handleChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  handleAddItem = (e) => {
    e.preventDefault();
    if (this.state.newItem.trim() === '') {
      return;
    }
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: ''
    });
  };

  render() {
    return (
      <div>
        <h2>List Manager</h2>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <form onSubmit={this.handleAddItem}>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.handleChange}
            placeholder={this.placeholder}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}
export default ListManager;
