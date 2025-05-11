import { useState } from "react";
import "./App.css";
import headerLogo from "./assets/logo.svg";
import AboutusImage from "./assets/about_image.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="firstSection">
        <header>
          <img src={headerLogo} />

          <ul className="headerUl">
            <li>Home</li>
            <li>About</li>
            <li>Packages</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </header>

        <div className="titlesDiv">
          <div className="titles">
            <p className="titlesH2">Explore the World</p>
            <span>With </span>
            <span className="travelLand">TravelLand</span>
          </div>
          <p className="titlesP">
            You can book right now and explore the world with us! Just press the
            button below!
          </p>
          <button className="firstBookNowButton">Book Now</button>
        </div>
      </section>
      <section className="secondSection">
        <div className="aboutUsImageDiv">
          <img src={AboutusImage} className="aboutUsImg" />
        </div>
        <div className="aboutusDiv">
          <h2 className="">About Us</h2>
          <span>TraveLand In</span> <span>Numbers</span>
          <p>
            At TravelLand, we believe travel should be easy, exciting, and
            unforgettable. With handpicked destinations, personalized packages,
            and seamless booking, we make exploring the world hassle-free.
            Whether you're seeking adventure or relaxation, TravelLand is here
            to take you there.
          </p>
          <button className="firstBookNowButton">Read More</button>
          <div>
            <div>
              <p>534</p>
              <p>Trips Done</p>
            </div>
            <div>
              <p>424</p>
              <p>Corporate Clients</p>
            </div>
          </div>
          <div>
            <div>
              <p>35</p>
              <p>Visited Countries</p>
            </div>
            <div>
              <p>15</p>
              <p>Team Members</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
