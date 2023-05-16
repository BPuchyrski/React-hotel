import { Link, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { Suspense, useEffect, useRef, useState } from "react";

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={css.conteiner}>
      <nav ref={menuRef} className={isMenuOpen ? css.active : css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={css.navLink}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={css.navLink}
              to="/"
            >
              Galeria
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={css.navLink}
              to="/"
            >
              Kontakt
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={css.navLink}
              to="/"
            >
              Domki
            </Link>
          </li>
        </ul>
      </nav>
      <div className={css.layout}>
        <div>
          <h3 className={css.title}>BB-Altic</h3>
          <p>Pokoje i apartamenty</p>
        </div>
        <div>
          <button className={css.buttonBurger} onClick={toggleMenu}>
            <svg
              className={css.burger}
              viewBox="0 0 100 80"
              width="30"
              height="30"
            >
              <rect width="100" height="8"></rect>
              <rect y="30" width="100" height="8"></rect>
              <rect y="60" width="100" height="8"></rect>
            </svg>
          </button>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
