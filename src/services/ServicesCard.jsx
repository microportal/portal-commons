import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const styles = {
    card: {
        maxWidth: 345,
        paddingTop: '50px',
        paddingRight: '30px',
        paddingBottom: '50px',
        paddingLeft: '80px'
    },
    media: {
        height: 140
    }
};

class ServicesCard extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={this.props.imageSrc}
                        title="Contemplative Reptile"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Service
                        </Typography>
                        <Typography component="p">
                            Nulla fermentum dolor non risus consequat, et pretium elit faucibus. Donec ac augue a lorem porttitor ultricies. Cras eros est, tristique eget malesuada
                            at, tincidunt imperdiet erat. Integer eget nulla et nibh tincidunt tempor.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button component={Link} to={this.props.to} size="small" variant="contained" color="primary">
                        {this.props.buttonLabel}
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

ServicesCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesCard);
