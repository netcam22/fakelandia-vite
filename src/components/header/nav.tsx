import { NavLink } from "react-router-dom";

const Nav = () => <nav className = "navbar navbar--style">
    <div className = "navbar__element">
    <input className = "navbar__checkbox" type="checkbox" />
        <span className = "navbar__burger navbar__burger--color"></span>
        <span className = "navbar__burger navbar__burger--color"></span>
        <span className = "navbar__burger navbar__burger--color"></span>
    <ul className = "navbar__list navbar__list--style navbar__list--transition">
        <li className = "navbar__item navbar__item--style"><NavLink to = "/">Home</NavLink></li>
        <li className = "navbar__item navbar__item--style"><NavLink to = "/misdemeanours">Misdemeanours</NavLink></li>
        <li className = "navbar__item navbar__item--style"><NavLink to = "/confession">Confess To Us</NavLink>
        </li>
    </ul>
    </div>
</nav>;

export default Nav;