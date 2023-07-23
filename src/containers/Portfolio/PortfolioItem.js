import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

// Define the styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "32px",
}));

// const StyledLink = styled(Link)(({ theme }) => ({
//   textDecoration: "none",
//   color: "grey",
// }));

export default function ImgMediaCard(props) {
  return (
    <StyledCard>
      {/* <a className={classes.link} href={props.link} target="_blank" rel="noopener noreferrer"> */}
      <CardActionArea component={Link} to={props.link} target="_blank" rel="noopener noreferrer">
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
        <Button id={props.title} size="small" color="primary" onClick={props.clicked}>
          I'm interested in similar
        </Button>
        <Button href={props.buttonRight} id={props.title + " - learn more"} color="primary">
          Learn More
        </Button>
      </CardActions>
    </StyledCard>
  );
}
