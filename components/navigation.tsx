import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CSS from "csstype";

const itemStyle: CSS.Properties = {
  padding: "1rem",
  display: "inline-block",
};

const linkStyle: CSS.Properties = {
    color: 'black',
}

function Blog() {
  return (
    <a style={linkStyle} href="https://github.com/barvirm/">
        <li style={itemStyle}>
            <FontAwesomeIcon icon={faBook} /> Blog
        </li>
    </a>
  );
}

function Github() {
  return (
    <a style={linkStyle} href="https://github.com/barvirm/">
      <li style={itemStyle}>
        <FontAwesomeIcon icon={faGithub} /> Github
      </li>
    </a>
  );
}

function Linkedin() {
  return (
    <a style={linkStyle} href="https://www.linkedin.com/in/marek-barv%C3%AD%C5%99-072068145/">
      <li style={itemStyle}>
        <FontAwesomeIcon icon={faLinkedin} /> Linkedin
      </li>
    </a>
  );
}

function Email() {
  return (
    <a style={linkStyle} href="mailto:barvirm@gmail.com">
      <li style={itemStyle}>
        <FontAwesomeIcon icon={faAt} /> Email
      </li>
    </a>
  );
}

const navStyle: CSS.Properties = {
  margin: 0,
  textAlign: "right",
  overflow: "hidden",
  listStyle: "none",
};

export function Nav() {
  return (
    <ul style={navStyle}>
      <Blog />
      <Github />
      <Linkedin />
      <Email />
    </ul>
  );
}
