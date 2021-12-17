import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //or use arrow function

  componentDidUpdate(prevProps, prevState) {
    console.log("counter - didupdate");
    console.log("prevProps :", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    //component called just before un mounted
    //maily for cleanup
    console.log("Counter - willunmount");
  }

  render() {
    console.log("counter - render");
    return (
      <div>
        {/* {this.props.children} This is for passing complex object from the parent  */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  //   handleIncrement() {
  //     console.log("Increment", this.state.count);
  //     //event handler dont have access to this , we need to bind it.
  //     //obj.method() - this - that object
  //     //function()- this -undefined
  //   }

  // doHandleIncrement = () =>{
  //   this.handleIncrement({id :2})
  // }
  //Not feasible use inline functions

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
