import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav>
        <NavLink key="1" to="/">
          Accueil
        </NavLink>
        <NavLink key="2" to="/apropos">
          A Propos
        </NavLink>
      </nav>
    </>
  );
}

export default Menu;
