class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };

    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Score Board</h1>
        <hr />
        <div>
          Score : {this.state.score} <br />
          <button onClick={this.incrementScore}>+</button>
          <button onClick={this.decrementScore}>-</button>
        </div>
      </div>
    );
  }

  incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrementScore() {
    this.setState({
      score: this.state.score - 1
    });
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
