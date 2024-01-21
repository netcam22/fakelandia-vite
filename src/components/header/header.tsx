import Nav from "./nav";
export interface HeaderProps {
    image: string;
}

const Header :React.FC<HeaderProps>= ({image}) => 
    <header className="header">
    <img className = "header__logo" 
    alt = "Fakelandia logo with pictures of vegetables, people not talking in a lift, a red football and a mildly rude looking person" 
    src= {image}></img>
    <Nav/>
</header>
export default Header;