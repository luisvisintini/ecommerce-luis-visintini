import React, { useState } from 'react'
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./NavbarElements";
import {
  FaApple,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaWineBottle,
  FaMailBulk,
} from "react-icons/fa";
import { IconContext } from "react-icons"; //--> mismos estilos a todos los iconos, pasamos provider y value para definir el estilo

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}> {/* mismo tamaño a todos los iconos */}
          <LogoContainer>
            <FaApple />
            <p>AdamsVape</p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  INICIO
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  SOBRE NOSOTROS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaWineBottle />
                  LIQUIDOS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaMailBulk />
                  CONTACTO
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};


export default Navbar