import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      Person: {
        fullName: "Hadjer Missaoui",
        bio: "Développeuse Web passionnée par React et le design moderne",
        imgSrc: "/hero-image.webp",
        profession: "Web Developer & Designer"
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    console.log("Composant monté !");
    
    this.intervalId = setInterval(() => {
      this.setState({
        mountedTime: this.state.mountedTime + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Composant démonté !");
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({
      shows: !this.state.shows
    });
  }

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  }

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1>Mon Profil React</h1>
          
          <div className="timer">
            Temps écoulé : <strong>{this.formatTime(mountedTime)}</strong>
          </div>

          <button onClick={this.toggleShow} className="toggle-btn">
            {shows ? "Cacher le profil" : "Afficher le profil"}
          </button>

          {shows && (
            <div className="profile-card">
              <img src={Person.imgSrc} alt={Person.fullName} />
              <h2>{Person.fullName}</h2>
              <h3>{Person.profession}</h3>
              <p>{Person.bio}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// ⚠️ TRÈS IMPORTANT : Cette ligne doit être À LA FIN !
export default App;