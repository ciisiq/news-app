import React from "react";
import Search from "../../search/Search";
import Button from "../../button/Button";
import "./main.scss";

export default function Main({ fetchPropsNews, handleSearch }) {
  return (
    <div className="home-container">
      <div className="wrapper-container">
        <div className="left">
          <div className="wrapper-logo">
            <h1>News</h1>
            <h3>Percayso</h3>
          </div>
        </div>
        <div className="right">
          <div className="wrapper-title">
            <h1>Find the last</h1>
            <div className="wrap-p">
              <p className="p1">News</p>
              <p className="p2"> in the world</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-input">
        <div className="wrap-both">
          <Search className="srch" onChangeNews={handleSearch} />
          <Button className="btn" click={fetchPropsNews} />
        </div>
      </div>
    </div>
  );
}
