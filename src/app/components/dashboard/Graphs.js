 
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
      paddingRight: '5%',
      fontSize: '1rem',
      paddingLeft: '10%',
      paddingTop: '16px'
  },
  listItemTextTitle: {
    paddingRight: '8%',
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
  },
  divModal:{},
  imgModal:{},
  placeholder: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'block',
    width: 'auto',
    height: 'auto',
    left:'20px'
  },
}

class Graphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          modalImg:""
        };
      }
    onDivClick = () => {
        this.setState({
            open: false
        });
    }
    onImgClick = (path) => {
        if(this.state.open){
            this.setState({
                open: false
            });
        }
        else {
            this.setState({
                open: true,
                modalImg:path
            });
        }
    }
    componentDidMount() {
        var req = require.context('../../../images/', true, /.*\.png$/);
        req.keys().forEach(function(key){
            req(key);
            // console.log(key)
            });
     }

    render() {
        // const marginLeft = ['-3%','-22%','-45%']
        // const marginTop = ['-22%','-41%','-62%']
        const cellCol = [0,400,300,250,200,170]
        const listItemHeight = [0,400,250,200,138,138]
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
        //      require(path);
        //      console.log(path)
        //      return true;
        //     } catch (err) {
        //         console.log("false")
        //         console.log(err)
        //      return false;
        //     }
        //   };
        for(var i = 0; i < graphs.length; i ++){
            console.log("../../../images/"+graphs[i]+this.props.graphType+".png")
        }

        return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <Paper >
                    <List component="nav" aria-label="secondary mailbox folders">
                            <span style={classes.listItemTextTitle} key={"xlabel"}>{xLabel}</span>       
                            {xValues === "" ? null : xValues.map(x => (
                                xLabel === 'component'? ( <span key={x} style={classes.listItemText}>{x}</span>)
                                    : (<span style={classes.listItemText} key={x}>{x}</span>)
                            ))}
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} md={1} lg={1}>
                <Paper className={fixedHeightPaper}>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem key="ylabel">
                            <ListItemText primary={ yLabel} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                         {yValues === "" ? null : yValues.map(x => (
                             yLabel === 'component'? (
                                <ListItem key={x}>
                                   <div style={{
                                        fontSize: '1rem',
                                        marginBottom: listItemHeight[xValues.length ]+'px'}
                                   }>{x}</div>
                                </ListItem>
                             ):(
                            <ListItem key="placeholder">
                                 <div style={{
                                        fontSize: '1rem',
                                        marginBottom: listItemHeight[xValues.length ]+'px'}}>{x}</div>
                            </ListItem>)
                        ))}
                    </List>

                </Paper>
            </Grid>
            <Grid item xs={12} md={11} lg={11}>
                <Paper className={fixedHeightPaper}>
                    {/* {
                        this.state.open?(
                        <div onClick={this.onDivClick}>
                            <div style={classes.divModal} >
                                <img style={classes.imgModal} src={require(this.state.modalImg)} alt="modalImage" />
                            </div>
                        </div>
                        ):null
                    }
                    */}
                    {graphs.length === 0? "Oops there is no result":(
                        <GridList cellHeight={cellCol[xValues.length]} cols={xValues.length}> 
                            {graphs.map(g => (
                                <GridListTile key={g} cols={1}>
                                    
                                        {/* {tryRequire("../../../images/"+g+this.props.graphType+".png")?(<img style={classes.images} src={require("../../../images/"+g+this.props.graphType+".png")} alt={g} />):
                                        ( <img style={classes.placeholder} src={require("../../../images/placeholder.png")} alt={g} />)
                                        } */}
                                    <img onClick={() => this.onImgClick("../../../images/"+g+this.props.graphType+".png")} style={classes.images} src={require("../../../images/"+g+this.props.graphType+".png")} alt={g} />
                                    
                                    {/* <img style={classes.images} src={"../../../images/"+g+this.props.graphType+".png"} alt={g} /> */}
                                    
                                    {/* onClick={ this.setModalState.bind(this, true, g)  */}
                                    {/* <div style={{
                                    display: (this.state.showModal && this.state.selected === g) ? 'block' : 'none' 
                                }}>
                                    <img style={{
                                        display: 'block',
                                        zIndex: '10000',
                                        position: 'fixed',
                                        marginTop: '-22%',
                                        marginLeft: '-3%'}
                                    } src={require("../../../images/6_12/performance.png")} onClick={ this.setModalState.bind(this, false, null) } alt={"modal-"+g}  />
                                </div> */}
                                </GridListTile>
                                    )
                                )
                                // require("../../../images/"+g+this.props.graphType+".png")
                            } 
                        </GridList>  
                    )}
                </Paper>
            </Grid>
        </Grid>
    );}
}

export default Graphs;