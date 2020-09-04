import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

class Cytoscape extends React.Component {
  constructor(prop) {
    super(prop);
  }

    render() {
      const { classes } = this.props;
      const elements = [
        { data: { id: 'one', label: 'Node 1' }, position: { x: 100, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 300 } },
        { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
     ];
        return (
          <Grid item xs={12}>
          <CytoscapeComponent 
              elements={elements} 
              cy={(cy) => {this.cy = cy}}
              style = {{height:'600px'}}
              className={classes.paper}
              />
          </Grid>

        )
    }
}

export default withStyles(styles)(Cytoscape);