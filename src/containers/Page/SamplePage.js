import { AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import axios from '../../axios-instance'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert, Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        color: 'white'
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
        color: 'white'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        minHeight: "70vh",
        lineHeight: '1.8'
    },
    abstract: {
        fontSize: '1.2em',
        fontWeight: 'bold'
    },
    cont: {
        marginTop: '16px',
        marginBottom: '8px'
    },
    text: {
        textAlign: "left",
        lineHeight: "28px"
    }
}));

const SamplePage = (props) => {
    const {id} = props
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('/content/'+ id)
            .then(response => {
                setData(response.data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
    }, [id])

    const content = {
        title: data.title,
        abstract: data.abstract,
        resourceBox: data.resourceBox,
        body: data.body
    }
    return (
        <div>
            <Helmet>
                <title>{content.title + ' | andrasvargas.com'}</title>
                <link rel="canonical" href={`${window.location.hostname}/sample-page`} />
            </Helmet>
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer">
                        <Menu />
                    </IconButton>
                    <Typography className={classes.title} variant="h1" noWrap>
                        {content.title}
                    </Typography>
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                        <MoreVert />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container className={classes.cont} maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            {(isLoading) ? <p>Loading...</p> : <ReactMarkdown>{content.resourceBox}</ReactMarkdown>}
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        {(isLoading) ? <p>Loading...</p> : <ReactMarkdown className={classes.abstract}>{content.abstract}</ReactMarkdown>
                        }
                        {(isLoading) ? <p>Loading...</p> : <ReactMarkdown>{content.body}</ReactMarkdown>}
                        
                        
                    </Paper>

                </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}

export default SamplePage