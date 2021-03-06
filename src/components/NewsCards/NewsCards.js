import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import NewsCard from "../NewsCard/NewsCard";

const infoCards = [
  {
    color: "linear-gradient(to right, #b993d6, #8ca6db)",
    title: "Latest News",
    text: "Give me the latest news about cryptocurrency",
  },
  {
    color: "linear-gradient(to right, #f2709c, #ff9472)",
    title: "News by Categories",

    text: "Give me the latest news in Tech, Business, Politics ",
  },
  {
    color: "linear-gradient(to right, #50c9c3, #96deda)",
    title: "News by Terms",

    text: "Give me the news about Video Games",
  },
  {
    color: "linear-gradient(to right, #ddd6f3, #faaca8)",
    title: "News by Sources",

    text: "Give me the news from BBC News, TechCrunch or CBC News",
  },
];

const NewsCards = ({ articles }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ background: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container align="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
