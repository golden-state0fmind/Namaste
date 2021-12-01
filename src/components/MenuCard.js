import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SmoothieImage from '../components/SmoothieImage'


const useStyles = makeStyles((theme) => ({
root: {
    maxWidth: 345,
},
media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
},
expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
},
expandOpen: {
    transform: 'rotate(180deg)',
},
avatar: {
    backgroundColor: red[500],
},
}));

export default function MenuCard() {
const classes = useStyles();
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
    setExpanded(!expanded);
};

return (
    <Card className={classes.root}>
    <CardHeader
        avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
            ⚡
        </Avatar>
        }
        action={
        <IconButton aria-label="settings">
        </IconButton>
        }
        title="Woke Energy Smoothie"
        subheader=""
    />
    <SmoothieImage/>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This impressive smoothie is life changing as we dive into the flavors of this powerful smoothie that'll get you jump started for the day.
        </Typography>
    </CardContent>
    <CardActions disableSpacing>
        <IconButton href="/" aria-label="add to favorites">
        {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
        {/* <ShareIcon /> */}
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
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
            Blend two cups water with your favorite mixed berries, 8 tbsp of dehydrated peanut butter, 2 tsp of organic grounded guarana seed, and one banana.
        </Typography>
        <Typography paragraph>
        The blend of mixed berries will add a greater defense to free radicals in your body while the organic peanut butter will provide protein and monounsaturated fats for a healthy heart. Followed by the electrifying guarana seed powder offering similar health benefits of the green tea plant and bananas are a great source for nutrients, fiber and carbs making this smoothie great for your first meal intake. 
        </Typography>
        </CardContent>
    </Collapse>
    </Card>
);
}
