import React from "react";
import shortid from "shortid";
import "../App.css"

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      duedate: "",
      expirydate: "",
    };
  }

  datehandle = () => {
    var date = Date
    if (date > this.state.duedate) {
      return "You Have Crossed Your Due Date!! "
    }
    else {
      return "You Are Good To Go!!"
    }
  }

  dateh = () => {
    this.setState({ expirydate: this.datehandle })
  }



  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      duedate: this.state.duedate,
      complete: false
    });
    this.setState({
      text: "",
      duedate: "",
    });
  };

  render() {
    return (

      <form className="d-flex justify-content-center container-fluid" onSubmit={this.handleSubmit}>
        <div className="p-2 ">
          <input
            name="text"
            className="form-control m-2 "
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Enter Task"
          />
          <button className="btn btn-primary m-2 " onClick={this.handleSubmit} onMouseOver="btn btn-success">add todo</button>
        </div>
        <div className="p-2 m-2">
          <label >Enter Due Date</label>
          <input className="m-2"
            type="date" name="duedate" value={this.state.duedate}
            onChange={this.handleChange}
          />

        </div>
      </form>

    );
  }
}
