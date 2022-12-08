import React, { Component } from "react";

export default class Movies extends Component {
  state = {
    isSubscribed: false,
  };
  handleSubscribe = () => {
    this.setState({
      isSubscribed: !this.state.isSubscribed,
    });
  };
  render() {
    return (
      <div>
        <h2>Movies|Testing class component</h2>
        <p data-testid="heading">welcome to movies url</p>
        <a href={this.props.url} data-testid="link">
          {this.props.url}
        </a>
        {this.state.isSubscribed ? (
          <p>You are a subscriber</p>
        ) : (
          <p>You are not a subscriber</p>
        )}
        <button onClick={this.handleSubscribe} data-testid="subscribeBtn">
          {this.state.isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
      </div>
    );
  }
}
