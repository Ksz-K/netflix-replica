import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

const Footer = () => {
  const [langContent, setLangContent] = useState(false);

  const FooterContainer = styled.footer`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: var(--main-grey);

    .footer-columns {
      width: 70%;
      margin: 1rem auto 0;
      font-size: 0.9rem;
      overflow: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    ul li {
      list-style: none;
      line-height: 2.5;
      margin-left: -40px;
    }

    a {
      color: var(--main-grey);
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
      width: 8.125rem;
      border: 1px solid #333;
      text-align: center;
      &:hover {
        background: #08f;
        color: #fff;
      }
    }
  `;

  const handleToggle = (e) => {
    e.preventDefault();
    setLangContent(!langContent);
  };
  return (
    <FooterContainer>
      <span style={{ marginLeft: "15%", fontSize: "1.125rem" }}>
        Questions? <Link>Call 1-234-567-8901</Link>{" "}
      </span>
      <div className="footer-columns">
        <ul>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Investor Relations</Link>
          </li>
          <li>
            <Link>Ways to Watch</Link>
          </li>
          <li>
            <Link>Corporate Information</Link>
          </li>
          <li>
            <Link>Netflix Originals</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Help Center</Link>
          </li>
          <li>
            <Link>Jobs</Link>
          </li>
          <li>
            <Link>Terms of Use</Link>
          </li>
          <li>
            <Link>Contact us</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Account</Link>
          </li>
          <li>
            <Link>Redeem Gift Cards</Link>
          </li>
          <li>
            <Link>Privacy</Link>
          </li>
          <li>
            <Link>Speed test</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Media Center</Link>
          </li>
          <li>
            <Link>Buy Gift Cards</Link>
          </li>
          <li>
            <Link>Cookie Preferences</Link>
          </li>
          <li>
            <Link>Legal Notices</Link>
          </li>
        </ul>
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
      </div>

      <span style={{ marginLeft: "15%", fontSize: ".9rem" }}>
        Netflix Canada
      </span>
    </FooterContainer>
  );
};

export default Footer;
