import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

class Cytoscape extends React.Component {
  constructor(prop) {
    super(prop);
  }

    render() {
      const { classes } = this.props;
      const elements = [
        { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
        { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
     ];
        return (
          <Container maxWidth="lg" className={classes.container}>
            <CytoscapeComponent 
              elements={elements} 
              style={{ width: '600px', height: '600px'}}
              cy={(cy) => {this.cy = cy}}
            />
          </Container>

        )
    }
}

export default withStyles(styles)(Cytoscape);