import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import "../Styles/navbar.css"
import { useSelector } from "react-redux";
import { MenuList } from "@mui/material";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.20),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));



const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function Navbar() {
  const { token } = useSelector((state) => state.login);
  const token_local=localStorage.getItem('token');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
    
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{backgroundColor:"#121212",maxHeight:"30px"}}>
        <NavLink
          to="/blog"
          style={{
            textDecoration: "none",
            fontSize: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            textTransform: "uppercase",
            textAlign:"center",
            color:"gold"
          }}
        >
          Blog
        </NavLink>
      </MenuItem>
      <MenuItem sx={{backgroundColor:"#121212",maxHeight:"30px"}}>
        <NavLink
          to="/news"
          style={{
            textDecoration: "none",
            fontSize: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            textTransform: "uppercase",
            textAlign:"center",
            color:"gold"
          }}
        >
          News
        </NavLink>
      </MenuItem>
      {!token&&!token_local?(<MenuList><MenuItem sx={{backgroundColor:"#121212",maxHeight:"30px"}}>
        <NavLink
          to="/login"
          style={{
            textDecoration: "none",
            fontSize: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            textTransform: "uppercase",
            textAlign:"center",
            color:"gold"
          }}
        >
          Login
        </NavLink>
      </MenuItem>
      <MenuItem sx={{backgroundColor:"#121212",maxHeight:"30px"}}>
        <NavLink
          to="/signup"
          style={{
            textDecoration: "none",
            fontSize: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            textTransform: "uppercase",
            textAlign:"center",
            color:"gold"
          }}
        >
          Signup
        </NavLink>
      </MenuItem>
      </MenuList>):(
      <MenuItem sx={{backgroundColor:"#121212",maxHeight:"30px"}}>
        <NavLink
          to="/profile"
          style={{
            textDecoration: "none",
            fontSize: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            textTransform: "uppercase",
            textAlign:"center",
            color:"gold"
          }}
        >
          Profile
        </NavLink>
      </MenuItem>
    )}
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#121212", color: "gold" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Finology
          </Typography>
          <Search sx={{ border: "1px solid gold" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink
              to="/blog"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginLeft: "2vw",
                marginRight: "2vw",
                color:"gold"
              }}
            >
              Blog
            </NavLink>
            <NavLink
              to="/news"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginLeft: "2vw",
                marginRight: "2vw",
                color:"gold"
              }}
            >
              News
            </NavLink>

            {!token && !token_local? (<Box>
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginLeft: "2vw",
                marginRight: "2vw",
                color:"gold"
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginLeft: "2vw",
                color:"gold"
              }}
            >
              Signup
            </NavLink>
            </Box>):(<Box>
             <NavLink
             to="/profile"
             style={{
               textDecoration: "none",
               fontSize: "20px",
               marginLeft: "2vw",
               color:"gold"
             }}
           >
             Profile
           </NavLink>
           </Box>)}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
