import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';
import logo_img from './DuckDuckGoLogo.svg';

const Header = () => (
  <header className="py-2"></header>
);
const DuckDuckGoLogo = () => (
  <Container className="w-25 py-5">
    <Container className="w-75">
      <img src={logo_img} alt="DuckDuckGo Logo" className="mx-auto img-fluid"/>
    </Container>
  </Container>
);
const SearchBar = () => (
  <Container className="w-50">
    <div className="input-group rounded">
      <input type="search" className="form-control rounded" placeholder="Search the web without being tracked" aria-label="Search" aria-describedby="search-addon"/>
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
    </div>
  </Container>
);

const Text = () => (
  <Container className="py-4 text-center">
    <h3 className="fw-bold">Tired of being tracked online? We can help.</h3>
    <p>Get seamless privacy protection for free by switching to DuckDuckGo:</p>
    <Container className="w-75">
      <Container className="w-50">
        <div className="row">
          <div className="col">Private Search</div>
          <div className="col">Tracker Blocking</div>
          <div className="col">Site Encryption</div>
        </div>
    </Container></Container>
  </Container>
);



const FooterMenu = () => (
  <Container className="w-50">
    <button className="btn btn-primary mx-3" type="submit">Download DuckDuckGo For Windows</button>
    <button className="btn btn-primary mx-3" type="submit">Add DuckDuckGo To Chrome</button>
  </Container>
);

const IslandSnow = () => (
  <Container>
    <Header/>
    <DuckDuckGoLogo/>
    <SearchBar/>
    <Text/>
    <FooterMenu/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);