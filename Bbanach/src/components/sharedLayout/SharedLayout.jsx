import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <div>
      <div className={css.layout}>
        <div>
          <h3 className={css.title}>B-Baltic</h3>
          <p>Pokoje i apartamenty</p>
        </div>
        <div>
          <button className={css.buttonBurger}>
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
