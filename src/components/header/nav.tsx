import { NavLink } from "react-router-dom";

const Nav = () => <nav className = "navbar">
    <div className = "navbar__element">
    <div className = "navbar__element--bars"><i className="fa fa-bars"></i></div>
    <ul className = "navbar__list navbar__list--light">
        <li className = "navbar__item navbar__item--dark"><NavLink to = "/">Home</NavLink></li>
        <li className = "navbar__item navbar__item--dark"><NavLink to = "/misdemeanours">Misdemeanours</NavLink></li>
        <li className = "navbar__item navbar__item--dark"><NavLink to = "/confession">Confess To Us</NavLink>
        </li>
    </ul>
    </div>
</nav>;

export default Nav;