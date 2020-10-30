import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import MaterialButton from '../MaterialButton/MaterialButton';

import HomeIcon from '@material-ui/icons/Home';


import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


class MaterialAppBar extends Component {

  state = {
    city: "Mumbai",
    drawerState: {
      left:false,
      right:false
    },
  }
  

  handleChange = (event) => {
    this.setState({city:event.target.value});
  };

  toggleDrawer = (anchor, open, event) => {
    if (event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")  )
     {
      return;
    }
    
    let updatedDrawerState = JSON.parse(JSON.stringify(this.state.drawerState));
    updatedDrawerState[anchor] = open;

    this.setState({drawerState:updatedDrawerState});
  };


  list = (anchor) => (
    <div
      className={clsx(this.props.classes.list, {
        [this.props.classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={(event) => this.toggleDrawer(anchor, false, event)}
      onKeyDown={(event) => this.toggleDrawer(anchor, false, event)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  

  render(){

    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" color="inherit" classes={this.props.classes.AppBarCss}>
          <Toolbar  classes={ {root:this.props.classes.toolbar}}>
  
            <IconButton
              edge="start"
              className={this.props.classes.menuButton}
              aria-label="open drawer"
              onClick={(event) => this.toggleDrawer('left', true, event)}
            >
              <MenuIcon  />
            </IconButton>
  
            <div className={this.props.classes.homeAndTitle}>
              <HomeIcon  className={this.props.classes.homeIcon}/>
              <Typography className={this.props.classes.title} variant="h6" noWrap>
                mutterfly
              </Typography>
            </div>
  
            <div className={this.props.classes.search1}>  
              <InputBase
                placeholder="Search for products"
                inputProps={{ 'aria-label': 'search' }}
                className={this.props.classes.searchInput}
               />
  
              <IconButton className={this.props.classes.searchIcon} onClick={(event) => this.toggleDrawer('right', true, event)}>
                  <SearchIcon />
              </IconButton>
            </div>
  
          <div className={this.props.classes.SelectAndBtn} >
              <Select
              labelId="demo-controlled-open-select-label"
              value={this.state.city}
              onChange={this.handleChange}
              >
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"banglore"}>banglore</MenuItem>
              </Select>
              <MaterialButton />
      
          </div>
          </Toolbar>
  
        </AppBar>

        {["left", "right"].map((anchor) => {
          
          
          console.log(this.state.drawerState[anchor]);
          console.log(this.state.drawerState);
          return (
            <Drawer
              key={anchor}
              anchor={anchor}
              open={this.state.drawerState[anchor]}
              onClose={(event) => this.toggleDrawer(anchor, false, event)}
            >
              {this.list(anchor)}
            </Drawer>
         
        )
          
           
          })}
  
      </div>
    );
  }

  
}


export default MaterialAppBar;