import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Tab } from "react-tabs";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 1 / 8;
  }

  .btn {
    margin-top: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    text-align: center;
    margin-top: 2rem;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;
const TabContentTwo = () => {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            {" "}
            Watch TV shows and movies anytime,anywhere - personalized for you.
          </span>
          <Button className="btn">try it now</Button>
        </div>
        <div className="tab-bottom-content">
          <div>
            <img src={ImgTv} alt="TVset" style={{ width: "18.75rem" }} />
            <h3>Watch on your TV</h3>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div>
            <img
              src={ImgTablet}
              alt="Tablet"
              style={{ width: "18.75rem", padding: "0.625rem auto" }}
            />
            <h3>Watch on your tablet</h3>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div>
            <img
              src={ImgMacbook}
              alt="Macbook"
              style={{ width: "18.75rem", padding: "0.625rem auto" }}
            />
            <h3>Watch on your PC</h3>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
};

export default TabContentTwo;
