import React from 'react';
import { NavLink } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Menu.css'
import imagemTemp from './../../assets/image/temp.png';

const Menu = () => {

    return (
        <SideNav id="MenuAmma" className='menuLateral'>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">

                <NavItem eventKey="home">
                    <NavIcon title={"Home"}>
                        <NavLink key="1" to="/home">
                            <img
                                style={{ height: "2rem" }}
                                alt={""}
                                src={imagemTemp}
                            />
                        </NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink key="1" to="/home">
                            Home
                         </NavLink>
                    </NavText>
                </NavItem>

                <NavItem eventKey="home">
                    <NavIcon title={"Login"}>
                        <NavLink key="2" to="/login">
                            <img
                                style={{ height: "2rem" }}
                                alt={""}
                                src={imagemTemp}
                            />
                        </NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink key="2" to="/login">
                            Login
                         </NavLink>
                    </NavText>
                </NavItem>

                <NavItem eventKey="home">
                    <NavIcon title={"Adicionar"}>
                        <NavLink key="2" to="/adicionar">
                            <img
                                style={{ height: "2rem" }}
                                alt={""}
                                src={imagemTemp}
                            />
                        </NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink key="2" to="/adicionar">
                            Adicionar
                         </NavLink>
                    </NavText>
                </NavItem>


            </SideNav.Nav>
        </SideNav>
    );
}

export default Menu;