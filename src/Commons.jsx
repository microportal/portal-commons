import React from 'react'
import {connect} from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';

import Routes from './main/Routes.jsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        // height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
});

class Commons extends React.Component {

    handleDrawerOpen = () => {
        console.log('open menu');
        this.props.globalEventDistributor.dispatch({type: 'MENU_OPEN'});
    };

    handleDrawerClose = () => {
        console.log('close menu');
        this.props.globalEventDistributor.dispatch({type: 'MENU_CLOSE'});
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        const {classes, theme} = this.props;

        return (
            <HashRouter>
                <div className={classes.root}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.props.menuOpen && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.props.menuOpen}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.props.menuOpen && classes.hide)}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap>
                                Portal
                            </Typography>
                            <div className={classes.grow}/>
                            <div className={classes.sectionDesktop}>
                                <IconButton color="inherit">
                                    <Badge className={classes.margin} badgeContent={this.props.alerts.length}
                                           color="secondary">
                                        <NotificationsIcon/>
                                    </Badge>
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.props.menuOpen && classes.drawerPaperClose),
                        }}
                        open={this.props.menuOpen}>
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                            </IconButton>
                        </div>
                        <Divider/>
                        <List>
                            <div>
                                <ListItem component={Link} button to={'/dashboard'}>
                                    <ListItemIcon>
                                        <InboxIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard"/>
                                </ListItem>
                                <ListItem component={Link} button to={'/services'}>
                                    <ListItemIcon>
                                        <StarIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Services"/>
                                </ListItem>
                            </div>
                        </List>
                        <Divider/>
                    </Drawer>

                    <main className={classes.content}>
                        <div style={{marginTop: 100}}>
                            <Routes/>
                        </div>
                    </main>
                </div>
            </HashRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        menuOpen: state.menuOpen,
        alerts: state.alerts
    };
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, null)(Commons));
