import { styled, alpha } from '@mui/material/styles';
import { AppBar, InputBase, Link, MenuItem, Toolbar, Box, Menu, IconButton } from '@mui/material';
import { Search as SearchIcon, Menu as MenuIcon} from '@mui/icons-material';
import SwitchMode from '../SwitchMode';
import { useState } from 'react';


const Search = styled('div')(({ theme }) => ({
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  backgroundColor             : alpha(theme.palette.common.white, 0.15),
  borderRadius                : theme.shape.borderRadius,
  marginLeft                  : 0,
  marginRight                 : theme.spacing(2),
  position                    : 'relative',
  width                       : '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width     : 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  alignItems    : 'center',
  display       : 'flex',
  height        : '100%',
  justifyContent: 'center',
  padding       : theme.spacing(0, 2),
  pointerEvents : 'none',
  position      : 'absolute',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding                     : theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft                 : `calc(1em + ${theme.spacing(4)})`,
    transition                  : theme.transitions.create('width'),
    width                       : '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  color: 'inherit',
}));

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{justifyContent: 'space-between', padding: '0 46px 0 46px !important'}}>
        <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              horizontal: 'left',
              vertical  : 'bottom',
            }}
            keepMounted
            transformOrigin={{
              horizontal: 'left',
              vertical  : 'top',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { md: 'none', xs: 'block' },
            }}
          >
            <MenuItem>
              <Link href="/">
            Inicio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">
            Postula a tu humanista
              </Link>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
          <MenuItem>
            <Link href="/">
            Inicio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
            Postula a tu humanista
            </Link>
          </MenuItem>
        </Box>
        <Box sx={{display: 'flex'}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <SwitchMode />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;