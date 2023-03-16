import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          <span className="dot">.</span>
          {/* </Link> */}
        </div>
        <div className="links">
          <span className="">Fiverr Business</span>
          <span className="">Explore</span>
          <span className="">English</span>
          <span className="">Sign in</span>
          <span className="">Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>TEst</span>
            <span>TEst</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
