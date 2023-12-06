import { NavLink } from "react-router-dom";

export const Header = () => (
    <header className="header">
        <nav className="menu">
            <NavLink to={'/'} className={({ isActive }) =>
                "menu__item" + (isActive ? ' menu__item_active' : '')
            }>
                Главная
            </NavLink>
            <NavLink to={'/about'} className={ ({ isActive })=>
                "menu__item" + (isActive ? ' menu__item_active' : '')
            }>
                Обо мне
            </NavLink>
        </nav>
        <div className="content">
            Это шапка сайта
        </div>
    </header>
)