 
import React from 'react';
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import data from '../data';

const classes = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },

  paper: {
    // padding: theme.spacing(2),
    padding: '30px',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  listItemText: {
      paddingRight: '10%',
      fontSize: '1rem',
      paddingLeft:'16px',
      paddingTop: '16px'
  },
  images: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'block',
    width: 'auto',
    height: 'auto'
  }
}

class Graphs extends React.Component {
    // componentDidMount() {
    //     var req = require.context('../../../../public/static/img', true, /.*\.png$/);
    //     req.keys().forEach(function(key){
    //         req(key);
    //         });
    //  }

    render() {
        var returndata = data(this.props.xAxisLabel,this.props.yAxisLabel,this.props.xValues,this.props.yValues,
            this.props.matrix, this.props.cost, this.props.component,this.props.innovation);
        const graphs = returndata[0];
        const xValues = returndata[1];
        const yValues = returndata[2];
        const xLabel = returndata[3];
        const yLabel = returndata[4];
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        // const tryRequire = (path) => {
        //     try {
        //      return require(path);
        //     } catch (err) {
        //      return "./";
        //     }
        //   };
        console.log(graphs)
        console.log(xValues.length)
        // component={componentsize} cost={cost} innovation={innovation} matrix={matrix}
        //   xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} graphType={graphType} 
        return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper >
                    <List component="nav" aria-label="secondary mailbox folders">
                            <span style={classes.listItemText}>{xLabel}</span>       
                            <span style={classes.listItemText}></span>       
                            {xValues === "" ? null : xValues.map(x => (
                                xLabel === 'component'? ( <span style={classes.listItemText}>{x}</span>)
                                    : (<span style={classes.listItemText}>{x}</span>)
                            ))}
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
                <Paper className={fixedHeightPaper}>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem >
                            <ListItemText primary={ yLabel} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                         {yValues === "" ? null : yValues.map(x => (
                             yLabel === 'component'? (
                                <ListItem >
                                <ListItemText primary={x} />
                                </ListItem>
                             ):(
                            <ListItem >
                                <ListItemText primary={x} />
                            </ListItem>)
                        ))}
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} md={10} lg={10}>
                <Paper className={fixedHeightPaper}>
                    {graphs.length === 0? "Oops there is no result":(
                        <GridList cellHeight={200} cols={xValues.length}> 
                            {graphs.map(g => (
                                <GridListTile key={g} cols={1}>
                                    <img style={classes.images} src={require("../../../images/"+g+this.props.graphType+".png")} alt={g} />
                                </GridListTile>)
                                )
                            } 
                        </GridList>  
                    )}
                </Paper>
            </Grid>
        </Grid>
    );}
}

export default Graphs;