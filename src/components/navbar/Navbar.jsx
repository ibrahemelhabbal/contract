import Logo from "../Logo";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PropTypes from "prop-types";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    }}
  >
    {children}
  </div>
));

CustomToggle.displayName = "CustomToggle";

CustomToggle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`nav ${scrolling ? "scrolled" : ""}`}>
      <Link to="/Conn">
        <button className="Btn">تواصل معنا</button>
      </Link>
      <ul className="navlinks">
        <li>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropdown-basic"
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "100",
                lineHeight: "normal",
              }}
            >
              <div
                className={scrolling ? "scrolled-link" : ""}
                style={{ fontFamily: "Cairo", fontSize: "15px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  style={{ marginRight: "7px" }}
                >
                  <path
                    d="M16 0.708637C16.0005 0.801361 15.9837 0.89328 15.9505 0.97912C15.9173 1.06496 15.8685 1.14304 15.8067 1.20887L10.361 6.96506C10.0514 7.29312 9.6836 7.5534 9.2787 7.73099C8.8738 7.90859 8.43973 8 8.00136 8C7.56299 8 7.12892 7.90859 6.72402 7.73099C6.31912 7.5534 5.95135 7.29312 5.64176 6.96506L0.196028 1.20887C0.133879 1.14318 0.0845804 1.06519 0.0509459 0.979361C0.0173114 0.893531 6.5484e-10 0.801539 0 0.708637C-6.54839e-10 0.615736 0.0173114 0.523745 0.0509459 0.437915C0.0845804 0.352085 0.133879 0.274098 0.196028 0.208406C0.258176 0.142715 0.331957 0.0906053 0.413158 0.0550532C0.494358 0.0195012 0.581389 0.00120306 0.66928 0.00120306C0.757171 0.00120306 0.844202 0.0195012 0.925402 0.0550532C1.0066 0.0906053 1.08038 0.142715 1.14253 0.208406L6.58827 5.96459C6.9632 6.36041 7.47145 6.58274 8.00136 6.58274C8.53127 6.58274 9.03951 6.36041 9.41445 5.96459L14.8602 0.208406C14.9222 0.14237 14.9959 0.0899539 15.0771 0.0541849C15.1583 0.0184159 15.2454 0 15.3334 0C15.4214 0 15.5086 0.0184159 15.5898 0.0541849C15.671 0.0899539 15.7447 0.14237 15.8067 0.208406C15.8685 0.27424 15.9173 0.352314 15.9505 0.438155C15.9837 0.523996 16.0005 0.615913 16 0.708637Z"
                    fill="white"
                  />
                </svg>
                الوظائف
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                backgroundColor: "white",
                position: "relative", // قم بتغيير هذه القيمة إلى "relative"
                top: "100%",
                left: "0",
                right: "auto",
                color: "#028091",
                transform: "translate3d(0px, 8px, 0px)",
                fontFamily: "Cairo",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "100",
                lineHeight: "normal",
              }}
              popperConfig={{
                strategy: "fixed",
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 8],
                    },
                  },
                  {
                    name: "preventOverflow",
                    options: {
                      padding: 8,
                    },
                  },
                ],
              }}
            >
              <Dropdown.Item>
                <NavLink to="/Vacancies">وظائف شاغره </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/Apply">التقديم </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        <li>
          <NavLink to="/Cusservice">خدمه العاملين </NavLink>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropdown-basic"
              style={{
                backgroundColor: "",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "100",
                lineHeight: "normal",
              }}
            >
              <div
                className={scrolling ? "scrolled-link" : ""}
                style={{ fontFamily: "Cairo", fontSize: "15px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  style={{ marginRight: "7px" }}
                >
                  <path
                    d="M16 0.708637C16.0005 0.801361 15.9837 0.89328 15.9505 0.97912C15.9173 1.06496 15.8685 1.14304 15.8067 1.20887L10.361 6.96506C10.0514 7.29312 9.6836 7.5534 9.2787 7.73099C8.8738 7.90859 8.43973 8 8.00136 8C7.56299 8 7.12892 7.90859 6.72402 7.73099C6.31912 7.5534 5.95135 7.29312 5.64176 6.96506L0.196028 1.20887C0.133879 1.14318 0.0845804 1.06519 0.0509459 0.979361C0.0173114 0.893531 6.5484e-10 0.801539 0 0.708637C-6.54839e-10 0.615736 0.0173114 0.523745 0.0509459 0.437915C0.0845804 0.352085 0.133879 0.274098 0.196028 0.208406C0.258176 0.142715 0.331957 0.0906053 0.413158 0.0550532C0.494358 0.0195012 0.581389 0.00120306 0.66928 0.00120306C0.757171 0.00120306 0.844202 0.0195012 0.925402 0.0550532C1.0066 0.0906053 1.08038 0.142715 1.14253 0.208406L6.58827 5.96459C6.9632 6.36041 7.47145 6.58274 8.00136 6.58274C8.53127 6.58274 9.03951 6.36041 9.41445 5.96459L14.8602 0.208406C14.9222 0.14237 14.9959 0.0899539 15.0771 0.0541849C15.1583 0.0184159 15.2454 0 15.3334 0C15.4214 0 15.5086 0.0184159 15.5898 0.0541849C15.671 0.0899539 15.7447 0.14237 15.8067 0.208406C15.8685 0.27424 15.9173 0.352314 15.9505 0.438155C15.9837 0.523996 16.0005 0.615913 16 0.708637Z"
                    fill="white"
                  />
                </svg>
                المركز الاعلامي
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                color: "#028091", // تعيين لون النص
              }}
              popperConfig={{
                strategy: "fixed",
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 8],
                    },
                  },
                  {
                    name: "preventOverflow",
                    options: {
                      padding: 8,
                    },
                  },
                ],
              }}
            >
              <Dropdown.Item>
                <NavLink to="/Videos">فيديوهات </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/News">اخبار </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <NavLink to="/OurProjects">مشارعنا</NavLink>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropdown-basic"
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "100",
                lineHeight: "normal",
              }}
            >
              <div
                className={scrolling ? "scrolled-link" : ""}
                style={{ fontFamily: "Cairo", fontSize: "15px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  style={{ marginRight: "7px" }}
                >
                  <path
                    d="M16 0.708637C16.0005 0.801361 15.9837 0.89328 15.9505 0.97912C15.9173 1.06496 15.8685 1.14304 15.8067 1.20887L10.361 6.96506C10.0514 7.29312 9.6836 7.5534 9.2787 7.73099C8.8738 7.90859 8.43973 8 8.00136 8C7.56299 8 7.12892 7.90859 6.72402 7.73099C6.31912 7.5534 5.95135 7.29312 5.64176 6.96506L0.196028 1.20887C0.133879 1.14318 0.0845804 1.06519 0.0509459 0.979361C0.0173114 0.893531 6.5484e-10 0.801539 0 0.708637C-6.54839e-10 0.615736 0.0173114 0.523745 0.0509459 0.437915C0.0845804 0.352085 0.133879 0.274098 0.196028 0.208406C0.258176 0.142715 0.331957 0.0906053 0.413158 0.0550532C0.494358 0.0195012 0.581389 0.00120306 0.66928 0.00120306C0.757171 0.00120306 0.844202 0.0195012 0.925402 0.0550532C1.0066 0.0906053 1.08038 0.142715 1.14253 0.208406L6.58827 5.96459C6.9632 6.36041 7.47145 6.58274 8.00136 6.58274C8.53127 6.58274 9.03951 6.36041 9.41445 5.96459L14.8602 0.208406C14.9222 0.14237 14.9959 0.0899539 15.0771 0.0541849C15.1583 0.0184159 15.2454 0 15.3334 0C15.4214 0 15.5086 0.0184159 15.5898 0.0541849C15.671 0.0899539 15.7447 0.14237 15.8067 0.208406C15.8685 0.27424 15.9173 0.352314 15.9505 0.438155C15.9837 0.523996 16.0005 0.615913 16 0.708637Z"
                    fill="white"
                  />
                </svg>
                عن رؤيه
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                backgroundColor: "white",
                position: "absolute",
                top: "100%",
                left: "10px",
                right: "auto",
                color: "#028091", // تعيين لون النص
                transform: "translate3d(0px, 8px, 0px) ",
                fontFamily: "Cairo",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: " 100",
                lineHeight: "normal",
                // ... الأنماط الأخرى ...
                float: "right", // تعيين اتجاه النص إلى اليمين
                // ... الأنماط الأخرى ...
                // تحريك القائمة لليسار
              }}
              popperConfig={{
                strategy: "fixed",
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 8],
                    },
                  },
                  {
                    name: "preventOverflow",
                    options: {
                      padding: 8,
                    },
                  },
                ],
              }}
            >
              <Dropdown.Item>
                <NavLink to="/Whowe">من نحن</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/HR">الموارد البشريه </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/Srespons">المسؤوليه المجتمعيه </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/Directors">مجلس الاداره </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <NavLink to="/">الرئيسيه</NavLink>
        </li>
      </ul>

      <Logo scrolling={scrolling} />
    </nav>
  );
}

export default Navbar;
