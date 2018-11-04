import React from 'react'
import {withStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';

import GridList from "@material-ui/core/GridList";

import {loadServices} from '../actions.js';
import ServicesCard from "./ServicesCard.jsx";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    }
});

class Services extends React.Component {

    async componentWillMount() {
        const resultAction = await loadServices();
        this.props.dispatch(resultAction);
    }

    renderApps() {
        const services = this.props.services || [];
        return services.map(service => (
            <ServicesCard key={service.name} imageSrc={service.imageUrl} to={service.path}
                          buttonLabel={service.name}/>
        ))
    }

    render() {
        const {classes} = this.props;
        return (
            <GridList className={classes.gridList} cols={3}>
                {this.renderApps()}
            </GridList>
        )
    }
}

function mapStateToProps(state) {
    return {
        services: state.services
    };
}

export default withStyles(styles)(connect(mapStateToProps, null)(Services));
