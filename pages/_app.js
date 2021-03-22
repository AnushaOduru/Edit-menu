import React from 'react';
import {ButtonGroup, Button, AppBar, Fab, IconButton, InputBase, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Tooltip, Typography, Container, Link, ButtonBase, TextField, Switch, FormControlLabel } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://staybanaras.kyukey.tech/hotel/editmenu">
       Kyukey Technologies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  

   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#cfe8fc',
    '&:hover': {
      backgroundColor: '#cfe8fc',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
     width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
 
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  RightButton: {
      padding: '12px 0px 0px 1250px',
  },
  AddButton: {
padding: '50px 0px 0px 300px',
  },
   fab: {
    margin: theme.spacing(2),},
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),

  },
   image: {
    width: 128,
    height: 60,

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),

  },
  cardGrid: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {

    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  editButton:{
    right: theme.spacing(8) ,
  padding: theme.spacing(1),
 
},
cardContent: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 200,
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <React.Fragment>
      <CssBaseline />
     <Toolbar>
       <Typography variant="caption" gutterBottom>
          <ButtonGroup disableElevation >
           <Button variant="contained" color="primary">Food</Button>
          <Button variant="Text">UTILITY</Button>
          </ButtonGroup>
        </Typography>
      </Toolbar>
     <main>
        {/* Hero unit */}
      <div className={classes.heroContent}>
          <Container maxWidth="sm" justify="center">
            <div className={classes.search}>
              <InputBase placeholder="Search…"classes={{root: classes.inputRoot,input: classes.inputInput,}}inputProps={{ 'aria-label': 'search' }} />
            </div>
          </Container>
          <div className={classes.RightButton}>
              <Button variant="contained" color="primary" disableElevation>
              Add Categore
              </Button>
          </div>
          <div className={classes.AddButton}>
            <Tooltip title="Delete">
              <IconButton aria-label="delete">
               <Typography variant="h5" >Coolers</Typography> 
                <ButtonBase className={classes.image}>
                 <img className={classes.img} alt="" src="https://source.unsplash.com/random" />
                </ButtonBase>
                 <DeleteIcon color="secondary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add" aria-label="add">
            <Fab color="primary" className={classes.fab}>
            <AddIcon />
            </Fab>
            </Tooltip>
          </div>
      </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={9}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={8} md={4}>
                <Card className={classes.card}>
                   <CardContent className={classes.cardContent}>
                    <form className={classes.root} noValidate autoComplete="off">
                      <div>
                      <TextField
                          label="item"
                          id="outlined-size-small"
                          defaultValue="item name"
                          variant="outlined"
                          size="small"/>
                      <TextField
                          label="₹"
                          id="outlined-size-small"
                          defaultValue="00.0"
                          variant="outlined"
                          size="small"/>
                      <Typography  >Available</Typography>
                    <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked}  color="primary"/>}
        />
                        </div>
                    </form>
</CardContent>
    <CardActions className={classes.editButton} >
      <Tooltip title="edit">
         <IconButton aria-label="edit">
           <EditIcon fontSize="small" color="primary"/>
         </IconButton>
      </Tooltip>
      <Tooltip title="Remove" aria-label="RemoveCircleIcon">
        <IconButton aria-label="RemoveCircleIcon">
          <RemoveCircleIcon color="secondary"/>
        </IconButton>
      </Tooltip>
    </CardActions>
</Card>
    </Grid>
            ))}
    </Grid>
  </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
       
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}