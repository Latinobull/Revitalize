import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));


export default function RecipeReviewCard({ recipe, handleSave }) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 
  const kalories = Math.round(recipe.recipe.calories) + " " + "Calories"
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={recipe.recipe.label}
        subheader= {kalories} 
      />
      <CardMedia
        className={classes.media}
        image={recipe.recipe.image}
        title={recipe.recipe.label}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleSave} varia-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton href= {recipe.recipe.url}>
          <NearMeIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients: </Typography>
          <Typography paragraph>
            {recipe.recipe.ingredients.map((ingredient) => {
              return (
                <li key={uuidv4()} className="listofIngredients">
                  {ingredient.text}
                </li>
              );
            })}
          </Typography>
          <Typography paragraph> Health Labels: </Typography>
            {recipe.recipe.healthLabels.map((label) =>{
              return(
              <Button id="healthLabel" key={uuidv4()} variant="outlined" size="small" color="primary" className={classes.margin}>
                {label}
              </Button>
              )
            })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
