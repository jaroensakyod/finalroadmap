import React from "react";
import "./Roadmap.css";

function Roadmap(props) {
  const {
    desktopHeroLight1,
    community,
    roadmap,
    surname1,
    type,
    x121,
    commonRareLegend,
    commonRare,
    x11,
    attributes,
    headFaceBody,
    backgroundHandBack,
    x122,
    number,
    planets,
    nftSpecifications,
    catear1011,
    catear1012,
    catear10131,
    catear1014,
    catear10132,
    body,
    surname2,
    rectangle51,
    x123,
    saveplanet1,
    address1,
    n1,
    address2,
    title,
    n2,
    publicSale,
    whatIsTheSavePlanet,
    rebirthingTheNewG,
    catusv2T1,
    copywright2022Rnx,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="roadmap screen">
        <div className="overlap-group8">
          <div className="desktop-header-light-7">
            <div className="overlap-group7">
              <img className="desktop-header-light-7-1" src="/img/desktop-header-light---7@1x.svg" />
              <div className="overlap-group6">
                <img className="desktop-hero-light-1" src={desktopHeroLight1} />
                <div className="desktop-navbar">
                  <div className="right">
                    <div className="desktop-menu">
                      <div className="text-link"></div>
                      <div className="text-link-1">
                        <div className="community">{community}</div>
                      </div>
                      <div className="text-link-2">
                        <div className="roadmap-1">{roadmap}</div>
                      </div>
                    </div>
                  </div>
                  <div className="master-button">
                    <div className="surname">{surname1}</div>
                  </div>
                </div>
                <div className="group-59">
                  <div className="type genos-normal-white-64px">{type}</div>
                  <div className="flex-row">
                    <div className="rectangle-50"></div>
                    <img className="x1-2" src={x121} />
                    <div className="common-rare-container michroma-normal-white-24px">
                      <div className="common-rare-legend">{commonRareLegend}</div>
                      <div className="common-rare">{commonRare}</div>
                    </div>
                  </div>
                </div>
                <img className="x1-1" src={x11} />
                <div className="rectangle-56"></div>
                <div className="rectangle-57"></div>
                <div className="group-60">
                  <div className="attributes genos-normal-white-64px">{attributes}</div>
                  <div className="flex-row-1 michroma-normal-white-24px">
                    <div className="rectangle-50-1"></div>
                    <div className="head-face-body">{headFaceBody}</div>
                    <div className="rectangle-51"></div>
                    <div className="background-hand-back">{backgroundHandBack}</div>
                  </div>
                </div>
                <img className="rectangle-48" src="/img/rectangle-48@1x.svg" />
                <div className="ellipse-1"></div>
                <div className="overlap-group1">
                  <img className="x1-2-1" src={x122} />
                  <div className="number">{number}</div>
                  <div className="planets">{planets}</div>
                  <div className="rectangle-50-2"></div>
                  <div className="nft-specifications genos-normal-white-48px">{nftSpecifications}</div>
                </div>
                <img className="vector" src="/img/vector@2x.svg" />
                <img className="vector-1" src="/img/vector-1@2x.svg" />
                <div className="overlap-group3">
                  <div className="overlap-group2">
                    <img className="catear1-01-1" src={catear1011} />
                    <img className="catear1-01-2" src={catear1012} />
                    <img className="catear1-01-3" src={catear10131} />
                    <img className="catear1-01-4" src={catear1014} />
                    <img className="catear1-01-3-1" src={catear10132} />
                    <img className="vector-2" src="/img/vector-2@2x.svg" />
                    <img className="vector-3" src="/img/vector-3@2x.svg" />
                    <div className="body michroma-normal-white-24px">{body}</div>
                  </div>
                  <div className="surname-1 michroma-normal-white-24px">{surname2}</div>
                </div>
                <img className="group-77" src="/img/group-77@1x.svg" />
                <img className="rectangle-51-1" src={rectangle51} />
                <div className="group-79">
                  <div className="group-75">
                    <img className="x1-2-2" src={x123} />
                    <div className="group-65"></div>
                  </div>
                  <div className="group-63">
                    <img className="saveplanet-1" src={saveplanet1} />
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="group-container">
                  <div className="overlap-group">
                    <div className="address genos-normal-white-64px">{address1}</div>
                    <div className="ellipse-3 border-2px-white"></div>
                    <div className="n genos-normal-white-48px">{n1}</div>
                  </div>
                  <div className="group-66">
                    <div className="overlap-group-1">
                      <div className="address-1 genos-normal-white-64px">{address2}</div>
                      <h1 className="title genos-normal-white-80px">{title}</h1>
                      <div className="ellipse-3-1 border-2px-white"></div>
                      <div className="n-1 genos-normal-white-48px">{n2}</div>
                    </div>
                    <div className="public-sale genos-normal-white-80px">{publicSale}</div>
                  </div>
                </div>
                <div className="overlap-group5">
                  <div className="what-is-the-save-planet">{whatIsTheSavePlanet}</div>
                  <div className="rebirthing-the-new-g">{rebirthingTheNewG}</div>
                  <div className="group-61"></div>
                </div>
                <img className="catusv2-t-1" src={catusv2T1} />
              </div>
              <div className="sun"></div>
            </div>
          </div>
          <img className="social-media" src="/img/social-media@2x.svg" />
          <div className="subtitle">
            <div className="copywright-2022-rnx">{copywright2022Rnx}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
