import React from "react";
import PropTypes from "prop-types";
import "../../App.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import styles from './frontpage.module.css';

const Frontpage = ({ handleChange }) => {
  return (
    <div className="App">
      Streamity
      <div>
      <Card classes={{root: styles.card}}>
        <CardActionArea>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              Yeet
            </Typography>
            <Typography color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              Meaning throw
              <br />
              {'"Yeet that bitch"'}
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        </CardActionArea>
      </Card>
      </div>
    </div>
  );
};

Frontpage.defaultProps = {
  handleChange: () => {},
};

Frontpage.propTypes = {
  handleChange: PropTypes.func,
};

export default Frontpage;
