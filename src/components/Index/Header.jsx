import './Header.css'
import logoOne from '../../assets/Logo.svg'
const Header = () => {
  return (
    <header>
      <a href=''><img src={logoOne} alt="" /></a>
      <label for="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </header>
  );
};

export default Header