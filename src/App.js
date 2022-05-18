import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    Person: {
      fullName: "luka",
      bio: "i play basketball ",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Luka_Don%C4%8Di%C4%87_2021.jpg",
      profession: "a",
    },
    shows: true,
  };
  change = () =>
    this.setState(this.state.shows ? { shows: false } : { shows: true });
  render() {
    return (
      <div>
        {this.state.shows?this.state.Person.fullName+"<br>"+this.state.Person.bio+" "+this.state.Person.profession:null}
        <button onClick={this.change}>aa</button>
        <br/>
        {this.state.shows?
        <img src={this.state.Person.imgSrc} alt="luka" width={200}></img>:null}
      </div>
    );
  }
}

export default App;
