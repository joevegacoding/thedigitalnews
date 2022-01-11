import React from "react";
import useStyles from "./styles.js";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const NewsCard = ({
  article: { title, description, publishedAt, source, url, urlToImage },
  i,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          image={
            urlToImage ||
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thenewsminute.com%2F&psig=AOvVaw1GSa_8NBxNuMzd7yhfkLiX&ust=1641938975996000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiGjb2ZqPUCFQAAAAAdAAAAABAJ"
          }
          className={classes.media}
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant="h5" className={classes.title}>
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          Read More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
