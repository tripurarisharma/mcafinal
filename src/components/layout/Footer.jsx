import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MCA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mcaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.youtube.com/@LOLComediHa">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/suraj.sharma2s">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/tripurarisharma">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
