import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Box from '@material-ui/core/Box';

class Small extends React.Component {
  constructor(prop) {
    super(prop);
  }

    render() {
      const elements = [
        // ノードのデータ
        { data: { id: 'one', label: 'Node 1' }, position: { x: 100, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 600, y: 300 } },
        { data: { id: 'three', label: 'Node 3' }, position: { x: 400, y: 200 } },
        { data: { id: 'four', label: 'Node 4' }, position: { x: 450, y: 350 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 230, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 120, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 54 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 300 } },
        { data: { id: 'two', label: 'Node 245' }, position: { x: 500, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 300 } },
        // エッジのデータ
        { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'one', target: 'three', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'one', target: 'four', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'two', target: 'four', label: 'Edge from Node1 to Node2' } },
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

export default Small;