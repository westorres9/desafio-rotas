import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './styles.css';

export default function Products() {
    return (
        <main className="product-content">
            <section >
            <div className="product-container">
            <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="computers">Computadores</NavLink>
            <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="electronics">Eletrônicos</NavLink>
            <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="books">Livros</NavLink>
            </div>
            <div>
            <Outlet/>
            </div>
            </section>
        </main>
    )
}