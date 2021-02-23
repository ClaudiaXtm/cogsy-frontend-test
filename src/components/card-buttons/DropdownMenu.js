import React from 'react';
import './DropdownMenu.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';


const DropdownMenu = withStyles({
    paper: {
      border: '1px solid #d2d7df',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ));

  const useStyles = makeStyles((theme) => ({
    menuButton: {
        width: '32px',
        height: '32px',
        border: '1px solid #d2d7df',
        borderRadius: '2px',
        '&:active': {
            backgroundColor: '#1254FF', 
            border: '1px solid #aacbff',
            color: '#ffffff'
         },
    },
    menuItem: {
      width: '130px',
        '&:hover': {
            backgroundColor: '#1254FF', 
            color: '#ffffff'
         },
    }
  }));
  
  export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    // menu click event
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    // menu close event
    const handleClose = () => {
      setAnchorEl(null);
    };

    // style classes
    const classes = useStyles();

    return (
      <div>
        {/* menu icon button */}
        <IconButton  
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.menuButton}
        >
            <MoreVertIcon />
        </IconButton>
        {/* menu dropdown list */}
        <DropdownMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          <MenuItem className={classes.menuItem}>
            <ListItemText primary="Save" />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemText primary="Edit" />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemText primary="Preview" />
          </MenuItem>
        </DropdownMenu>
      </div>
    );
  }

