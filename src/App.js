import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Riadh",
      bio: "Homme",
      imgSrc: logo,
      profession: "Gearnt",
    },
    show: true,
    timer: 5076,
  };
  handelShow = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  render() {
    const heurs = Math.floor(this.state.timer / 3600) % 24;
    const minutes = Math.floor(this.state.timer / 60) % 60;
    const seconds = this.state.timer % 60;
    return (
      <div>
        {this.state.show && <Profile person={this.state.Person} />}
        <button onClick={this.handelShow}>
          {this.state.show ? "Masquer" : "Show"}
        </button>
        <br />
        <span>{String(heurs).padStart(2, "0")}</span>:
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
    );
  }
}

export default App;
