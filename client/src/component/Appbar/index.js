import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Avatar, Link } from '@material-ui/core';
import { useAuth } from '../../Authenticate/AuthContext';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    backgroundColor: '#303179',
  },
}));

export default function Appbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElHome, setAnchorElHome] = React.useState(null);
  const openHome = Boolean(anchorElHome);
  const open = Boolean(anchorEl);
  const { currentUser, Logout } = useAuth();
  const history = useHistory();

  console.log(currentUser);

  const handleChange = () => {
    if (!currentUser) {
      history.push('/login');
      setAuth(false);
    } else {
      setAuth(true);
    }

    if (currentUser && auth == true) {
      setAuth(false);

      return Logout();
    }
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuHome = event => {
    setAnchorElHome(event.currentTarget);
  };

  const handleCloseHome = () => {
    setAnchorElHome(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup></FormGroup>
      <AppBar position="static" className={classes.main}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={handleMenuHome}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElHome}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={openHome}
            onClose={handleCloseHome}
          >
            <MenuItem onClick={handleCloseHome}>
              <Link href="/" color="inherit">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseHome}>
              <Link href="/chat" color="inherit">
                Chat
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseHome}>
              <Link href="/recipes" color="inherit">
                Recipes
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseHome}>
              <Link href="/journals" color="inherit">
                Journals
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseHome}>
              <Link href="/meditation" color="inherit">
                Meditation
              </Link>
            </MenuItem>
          </Menu>

          <Typography variant="h4" className={classes.title} align="center">
            Revitalize
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {currentUser.photoUrl == null ? (
                  <AccountCircle />
                ) : (
                  <Avatar src={currentUser.photoUrl}></Avatar>
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/profile/:uid">My Account</Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
