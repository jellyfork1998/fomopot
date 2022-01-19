import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      
      {/* <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a> */}
      {/* <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a> */}
      <a href="http://twitter.com/FomoPotbsc" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="http://instagram.com/FomoPotbsc"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a
        href="https://t.me/FomoPot"
        className="telegram social"
      >
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      <p className="mt-5 text-white">FomoPot@gmail.com</p>
      <p >© Copyright 2022 FomoPot. All Rights Reserved.</p>
    </div>
  );
}
