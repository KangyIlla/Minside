import React from 'react';
import '../App.css';
import logo from './starwars.png'

function App() {
  return (
    <div>
      <div className="star-background">
        <div className="container">
          <div className="row justify-content-md-center">
              <h2 style={{color:"yellow", marginTop:"5vh"}}> Welcome to the star wars database </h2>
          </div>
          <section>
            <div className="row justify-content-md-center">
                <img src={logo} className="img-fluid" alt="Responsive image"/>
            </div>
          </section>
          <section>
            <div className="row justify-content-md-center">
                <div className="btn-group-lg">
                  <a className="a-size" style={{color:"yellow"}} title="Click to see all the star wars characters" href="#/Character"> Characters </a>
                  <a className="a-size" style={{color:"yellow"}} title="Click to see all the star wars movies" href="#/Movie"> Movies </a>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
