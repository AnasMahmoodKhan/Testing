import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./App.css";
import SharedButton from "./components/button";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import ListItems from "./components/listitem";

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
    this.props.fetchPosts();
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
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch,
    };

    return (
      <div>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" />
          {!hideBtn && <SharedButton {...configButton} />}
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItems key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
