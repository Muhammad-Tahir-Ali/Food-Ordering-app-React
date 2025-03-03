import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover" href="#">
          Branding
        </a>
        <a className="link link-hover" href="#">
          Design
        </a>
        <a className="link link-hover" href="#">
          Marketing
        </a>
        <a className="link link-hover" href="#">
          Advertisement
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover" href="#">
          About us
        </a>
        <a className="link link-hover" href="#">
          Contact
        </a>
        <a className="link link-hover" href="#">
          Jobs
        </a>
        <a className="link link-hover" href="#">
          Press kit
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover" href="#">
          Terms of use
        </a>
        <a className="link link-hover" href="#">
          Privacy policy
        </a>
        <a className="link link-hover" href="#">
          Cookie policy
        </a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text" >Enter your email address</span>
          </label>
          <div className="join">
            <input id="email"
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button onClick={(e)=>preventdefault()} id="sub-btm">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
