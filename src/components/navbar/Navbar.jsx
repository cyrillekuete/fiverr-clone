import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  //Enabling and Disabling the class style
  const [active, setActive] = useState(false);

  //Opening and closing of user's dropdown
  const [open, setOpen] = useState(false);

  //Using the useLocation hook
  const { pathname } = useLocation();

  //Setting the scroll positions
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  //Getting the position and enabling the class
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // Current User

  const currentUser = {
    id: 1,
    userName: "Cyrille Kuete",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span className="">Fiverr Business</span>
          <span className="">Explore</span>
          <span className="">English</span>
          <span className="">Sign in</span>
          {!currentUser?.isSeller && <span className="">Become a Seller</span>}
          {!currentUser && <button>Join</button>}

          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://avatars.githubusercontent.com/u/15327665?s=40&amp;v=4"
                alt="@cyrillekuete"
                size="20"
                data-view-component="true"
                class="avatar avatar-small circle"
              />
              <span>{currentUser?.name}</span>

              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gigs
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/logout">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        ))}
    </div>
  );
};

export default Navbar;
