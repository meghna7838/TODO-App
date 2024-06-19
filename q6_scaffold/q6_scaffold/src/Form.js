import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

 
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
  let {todos,onAdd} = this.props;

    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}
        <button onClick={()=>{onAdd(input.value)}}>Add</button>
      </div>
    );
  }
}
