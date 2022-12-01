import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const headerMenuItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Works",
      path: "/works",
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      name: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className="container-full">
          <div className={styles["header-row"]}>
            <Link className={styles["header__logo"]} to="/">
              Logo
            </Link>
            <ul className={styles["header__menu"]}>
              {headerMenuItems.map((item) => (
                <li className={styles["header__menu-item"]} key={item.id}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? styles["header__menu-link-active"]
                        : styles["header__menu-link"]
                    }
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
