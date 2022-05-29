import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|roadmap)">
          <Roadmap {...roadmapData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const roadmapData = {
    desktopHeroLight1: "/img/desktop-hero-light-1@1x.png",
    community: "Community",
    roadmap: "Roadmap",
    surname1: "White Paper",
    type: "Type",
    x121: "/img/1-2@2x.png",
    commonRareLegend: <React.Fragment>common<br />rare<br />legend</React.Fragment>,
    commonRare: <React.Fragment>common<br />rare</React.Fragment>,
    x11: "/img/1-1@1x.png",
    attributes: "Attributes",
    headFaceBody: <React.Fragment>Head<br />Face<br />Body</React.Fragment>,
    backgroundHandBack: <React.Fragment>Background<br />Hand<br />Back</React.Fragment>,
    x122: "/img/1-2@2x.png",
    number: "3333",
    planets: "planets",
    nftSpecifications: "NFT Specifications",
    catear1011: "/img/catear1-01-1@2x.png",
    catear1012: "/img/catear1-01-2@2x.png",
    catear10131: "/img/catear1-01-3@2x.png",
    catear1014: "/img/catear1-01-3@2x.png",
    catear10132: "/img/catear1-01-3-1@2x.png",
    body: "Body",
    surname2: "Head &Face",
    rectangle51: "/img/rectangle-51@1x.png",
    x123: "/img/1-2-2@2x.png",
    saveplanet1: "/img/saveplanet-1@2x.png",
    address1: "1 Planet = 10",
    n1: "N",
    address2: "1 Planet = 5",
    title: "Whitelist",
    n2: "N",
    publicSale: "Public Sale",
    whatIsTheSavePlanet: "What is the Save Planet?",
    rebirthingTheNewG: <React.Fragment>Rebirthing the new generations of everlasting galaxy<br />with the 3,333 unique NFT planets in the the nearverse</React.Fragment>,
    catusv2T1: "/img/catusv2t-1@1x.png",
    copywright2022Rnx: "Copywright 2022. Rnx",
};

