import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 1,
      },
      {
        id: 3,
        value: 2,
      },
      {
        id: 4,
        value: 3,
      },
    ],
  };

  //We can directly set state variable only in constructor.
  //Also this.setState() cannot be called in constructor , it can only be
  //called after it is rendered.
  //props should be added to constructor

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //after its rendered
    // ajax call
    //initialize the state
    console.log("App - mounted");
  }
  //hooks are recursive. eg: render of all child components are called together.

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++; //make sure you dont increment state directly
    //react needs only state for comparing dom
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
