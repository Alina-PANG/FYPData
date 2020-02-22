import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {mainListItems} from './listItems';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Graphs from './Graphs';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
         Pang Hangzhi 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [componentsize, setComponentSize] = React.useState('');
  const [cost, setCost] = React.useState('');
  const [innovation, setInnovation] = React.useState('');
  const [matrix, setMatrix] = React.useState('');
  const [graphType, setGraphType] = React.useState('');
  var [xAxisLabel, setXAxisLabel] = React.useState('');
  var [yAxisLabel, setYAxisLabel] = React.useState('');
  var [xValues, setXValues] = React.useState('');
  var [yValues, setYValues] = React.useState('');
  const costValues = [0.01,0.25,0.5];
  const matrixValues = [3,6,9,12,15];
  const componentValues = [[2,2],[3,3],[4,4],[5,5],[2,5]];
  const innovationValues = [0.5,0.75,1];

  // const handleSubmit = event => {
    
  // }
  const handleComponentChange = event => {
    if(event.target.value === -1){
      setXAxisLabel('component');
      setXValues(componentValues);
    }
    else if(event.target.value === -2){
      setYAxisLabel('component')
      setYValues(componentValues)
    }
    setComponentSize(event.target.value);
  };
  const handleCostChange = event => {
    if(event.target.value === -1){
      setXAxisLabel('cost');
      setXValues(costValues);
    }
    else if(event.target.value === -2){
      setYAxisLabel('cost')
      setYValues(costValues)
    }
    setCost(event.target.value);
  };
  const handleInnovationChange = event => {
    if(event.target.value === -1){
      setXAxisLabel('innovation');
      setXValues(innovationValues);
    }
    else if(event.target.value === -2){
      setYAxisLabel('innovation')
      setYValues(innovationValues)
    }
    setInnovation(event.target.value);
  };
  const handleMatrixChange = event => {
    if(event.target.value === -1){
      setXAxisLabel('matrix');
      setXValues(matrixValues);
    }
    else if(event.target.value === -2){
      setYAxisLabel('matrix')
      setYValues(matrixValues)
    }
    setMatrix(event.target.value);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleGraphTypeChange = event => {
    setGraphType(event.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item md={12} lg={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Component</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={componentsize}
                  onChange={handleComponentChange}
                >
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={'random'}>Random</MenuItem>
                  { (cost === -1 || innovation === -1 || matrix === -1) ? null: <MenuItem value={-1}>Axis 1</MenuItem>}
                  { (cost === -2 || innovation === -2 || matrix === -2) ? null: <MenuItem value={-2}>Axis 2</MenuItem>}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Matrix</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={matrix}
                  onChange={handleMatrixChange}
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  { (componentsize === -1 ||  innovation === -1 || cost === -1) ? null: <MenuItem value={-1}>Axis 1</MenuItem>}
                  { (componentsize === -2 ||  innovation === -2 || cost === -2) ? null: <MenuItem value={-2}>Axis 2</MenuItem>}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Cost</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cost}
                  onChange={handleCostChange}
                >
                  <MenuItem value={0.01}>0.01</MenuItem>
                  <MenuItem value={0.25}>0.25</MenuItem>
                  <MenuItem value={0.5}>0.5</MenuItem>
                  { (componentsize === -1 || innovation === -1 || matrix === -1) ? null: <MenuItem value={-1}>Axis 1</MenuItem>}
                  { (componentsize === -2 || innovation === -2 || matrix === -2) ? null: <MenuItem value={-2}>Axis 2</MenuItem>}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Innovation</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={innovation}
                  onChange={handleInnovationChange}
                >
                  <MenuItem value={0.5}>0.5</MenuItem>
                  <MenuItem value={0.75}>0.75</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  { (componentsize === -1 || cost === -1 || matrix === -1 ) ? null: <MenuItem value={-1}>Axis 1</MenuItem>}
                  { (componentsize === -2 || cost === -2 || matrix === -2 ) ? null: <MenuItem value={-2}>Axis 2</MenuItem>}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Graph Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={graphType}
                  onChange={handleGraphTypeChange}
                > 
                  <MenuItem value={"performance"}>Performance</MenuItem>
                  <MenuItem value={"rank"}>Rank</MenuItem>
                  <MenuItem value={"count"}>Count</MenuItem>
                  <MenuItem value={"sizeHeatMap"}>Size Heat Map</MenuItem>
                  <MenuItem value={"borrowedVSranking"}>Borrowed vs Ranking</MenuItem>
                  <MenuItem value={"firmSizeOccurence"}>Firm Size Occurence</MenuItem>
                  <MenuItem value={"sizeVSefficiency"}>Size vs Efficiency</MenuItem>
                  <MenuItem value={"sizeVSfitness"}>Size vs Fitness</MenuItem>
                  <MenuItem value={"sizeVSranking"}>Size vs Ranking</MenuItem>
                  <MenuItem value={"totalVSranking"}>Total Size vs Ranking</MenuItem>
                </Select>
              </FormControl>
              {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button> */}
            </Grid>
          </Grid>
          <Graphs component={componentsize} cost={cost} innovation={innovation} matrix={matrix}
          xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} graphType={graphType} xValues={xValues} yValues={yValues}/>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
