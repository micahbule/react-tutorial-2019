import React, { Component } from 'react';

class App extends Component {
  state = {
    phone_numbers: []
  }

  handleAdd = () => {
    const { phone_numbers } = this.state;

    this.setState({ phone_numbers: phone_numbers.concat(['']) });
  }

  handleSave = () => {
    const { phone_numbers } = this.state;

    const phoneString = phone_numbers.join(', ');

    alert(phoneString);
  }

  handleChange = (index, e) => {
    const { phone_numbers } = this.state;

    this.setState({
      // phone_numbers: []
      //   .concat(phone_numbers.slice(0, index))
      //   .concat([e.target.value])
      //   .concat(phone_numbers.slice(index + 1))
      phone_numbers: [
        ...phone_numbers.slice(0, index),
        e.target.value,
        ...phone_numbers.slice(index + 1)
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="phone">Phone Numbers</label>
        &nbsp;
        <button type="button" onClick={this.handleAdd}>+</button>
        {this.state.phone_numbers.map((phone_number, index) => (
          <span key={index}>
            <br />
            <input type="text" name="phone" value={phone_number} onChange={this.handleChange.bind(this, index)} />
          </span>
        ))}
        <button type="button" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default App;
