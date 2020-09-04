import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Box from '@material-ui/core/Box';

class Cytoscape extends React.Component {
  constructor(prop) {
    super(prop);
  }

    render() {
      const elements = [
        { data: { id: 'one', label: 'Node 1' }, position: { x: 100, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 300 } },
        { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
     ];

        return (
          <Box height='100%'>
            <CytoscapeComponent 
                elements={elements} 
                cy={(cy) => {this.cy = cy}}
                style={ { height:'100%' } }
                />
          </Box>

        )
    }
}

export default Cytoscape;