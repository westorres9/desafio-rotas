import './styles.css';
import HomeImg from '../../assets/img/home.svg';
import { NavLink } from 'react-router-dom';

export default function HeaderBar() {
    return (
        <header>
            <nav>
                <div>
                    <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="/home">Início</NavLink>
                    <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="/products">Produtos</NavLink>
                    <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="/about">Sobre-nós</NavLink>
                </div>
                <a href="">
                <NavLink to="/">
                    <img src={HomeImg} alt="home image" />
                </NavLink>
                </a>
            </nav>
        </header>
    )
}