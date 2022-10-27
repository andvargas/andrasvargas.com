import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "32px",
  },
  link: {
    textDecoration: "none",
    color: "grey",
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {/* <a className={classes.link} href={props.link} target="_blank" rel="noopener noreferrer"> */}
      <CardActionArea className={classes.link} href={props.link} target="_blank" rel="noopener noreferrer">
        <CardMedia component="img" alt={props.title} height="140" image={props.img} title={props.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* </a> */}

      <CardActions>
        <Button /* className={classes.link} */ size="small" color="primary" onClick={props.clicked}>
          I'm interested in similar
        </Button>
        <Link className={classes.link} to={props.buttonRight}>
          <Button size="small" color="primary" onClick={props.clicked} href={props.buttonRight}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
