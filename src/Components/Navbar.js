import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Старт",
      icon: <HomeIcon />,
    },
    {
      text: "О нас",
      icon: <InfoIcon />,
    },
    {
      text: "Отзывы",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Связаться",
      icon: <PhoneIcon />,
    },
    {
      text: "Корзина",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Старт</a>
        <a href="">О нас</a>
        <a href="">Отзывы</a>
        <a href="">Связаться</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Заказать</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
        >
            <List>
                {menuOptions.map((item) => (
                    <ListItem key = {item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>     
                ))}
            </List>
        </Box>
      </Drawer>
    </nav>
  );
};
