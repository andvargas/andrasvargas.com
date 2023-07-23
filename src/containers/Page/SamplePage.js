import { Container, Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "../../axios-instance";
import ReactMarkdown from "react-markdown";
import NavBar from "../../components/Navigation/NavBar";
import Helmet from "react-helmet";
import { styled } from "@mui/material/styles";

// Define the styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  minHeight: "70vh",
  lineHeight: "1.8",
}));

const StyledAbstractMarkdown = styled(ReactMarkdown)(({ theme }) => ({
  fontSize: "1em",
  fontWeight: "bold",
}));

const StyledBodyMarkdown = styled(ReactMarkdown)(({ theme }) => ({
  fontSize: "inherit",
  "& pre": {
    color: "white",
    fontSize: "small",
    whiteSpace: "pre-wrap",
    backgroundColor: "grey",
    padding: "4px",
  },
}));

const SamplePage = (props) => {
  const { id } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const userType = useSelector((state) => state.auth.userType);
  console.log(userType);

  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/content/" + id)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const content = {
    title: data.title,
    abstract: data.abstract,
    resourceBox: data.resourceBox,
    body: data.body,
  };

  return (
    <div>
      <Helmet>
        <title>{content.title + " | andrasvargas.com"}</title>
        <link rel="canonical" href={`${window.location.hostname}/${content.title}`} />
      </Helmet>
      <NavBar />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <h1>{content.title}</h1>
          <Grid item xs={3}>
            <StyledPaper>{isLoading ? <p>Loading...</p> : <ReactMarkdown>{content.resourceBox}</ReactMarkdown>}</StyledPaper>
          </Grid>
          <Grid item xs={9}>
            <StyledPaper>
              {isLoading ? <p>Loading...</p> : <StyledAbstractMarkdown>{content.abstract}</StyledAbstractMarkdown>}
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <StyledBodyMarkdown components={{ img: ({ node, ...props }) => <img style={{ maxWidth: "100%" }} {...props} alt="" /> }}>
                  {content.body}
                </StyledBodyMarkdown>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SamplePage;
