import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';
//Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        maxWidth: '100%',
    },
}));

export default function Post() {
    const { slug } = useParams();
    const classes = useStyles();

    const [data, setData] = useState({ posts: [] });

    useEffect(() => {
        axiosInstance.get(slug).then((res) => {
            setData({ posts: res.data });
            //console.log(res.data);
        });
    }, [setData]);

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}></div>
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                    <img src={data.posts.image} title={data.posts.title} className={classes.image} alt={data.posts.title} />
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        {data.posts.title}
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        {data.posts.excerpt}
                    </Typography>
                </Container>
            </div>
        </Container>
    );
}