import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

const customMedia = generateMedia({
  tablet: "740px",
});

const FooterContainer = styled.footer`
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 3rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;

  .footer-columns {
    width: 80%;
    margin: 1rem auto 0;
    color: var(--main-grey);
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan("tablet")`
      grid-template-columns: repeat(2, 1fr);
      `}
  }

  ul li {
    list-style: none;
    line-height: 2.5;
    margin-left: -40px;
  }

  a {
    color: var(--main-grey);
    font-size: 0.9rem;
  }
  p {
    text-decoration: underline;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .lang-btn {
    position: relative;
    background: transparent;
    border: 1px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 2rem;
    cursor: pointer;
    margin-left: 10%;
    color: var(--main-grey);
  }
  .lang-toggle {
    margin-top: -5rem;
    position: absolute;

    ul {
      margin: 0;
    }
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #08f;
      color: #fff;
    }
  }
`;

const Footer = () => {
  const [langContent, setLangContent] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setLangContent(!langContent);
  };
  return (
    <FooterContainer>
      <span style={{ marginLeft: "10%", color: "#999" }}>
        Questions? <Link to="#!">Call 1-234-567-8901</Link>{" "}
      </span>
      <div className="footer-columns">
        <ul>
          <li>
            <Link to="#!">Gift Card Terms</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#!">Terms of use</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#!">Privacy Statement</Link>
          </li>
        </ul>
      </div>
      <div className="lang-btn" onClick={handleToggle}>
        <Icon icon={iosWorld} size={20} />
        &nbsp;English&nbsp;
        <Icon icon={arrowSortedDown} size={20} />
        {langContent && (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul>
              <li>French</li>
            </ul>
          </div>
        )}
      </div>

      <span style={{ marginLeft: "10%", fontSize: ".9rem" }}>
        Netflix Canada
      </span>
    </FooterContainer>
  );
};

export default Footer;
