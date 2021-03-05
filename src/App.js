import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./App.css";
import SharedButton from "./components/button";
const initialState = {
  hideBtn: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.updatesState();
  }

  updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  }
  render() {
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch,
    };
    
    return (
      <div>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" />
          {!hideBtn && <SharedButton {...configButton}/>}
        </section>
      </div>
    );
  }
}

export default App;
