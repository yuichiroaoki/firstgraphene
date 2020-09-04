import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Box from '@material-ui/core/Box';

class Big extends React.Component {
  constructor(prop) {
    super(prop);
  }

    render() {
      const elements = [
        // ノードのデータ
        { data: { id: 'one', label: 'Node 1' }, position: { x: 100, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 300 } },
        { data: { id: 'three', label: 'Node 3' }, position: { x: 605, y: 245 } },
        { data: { id: 'four', label: 'Node 4' }, position: { x: 542, y: 454 } },
        { data: { id: 'five', label: 'Node 5' }, position: { x: 245, y: 121 } },
        { data: { id: 'six', label: 'Node 6' }, position: { x: 252, y: 300 } },
        { data: { id: 'seven', label: 'Node 7' }, position: { x: 445, y: 211 } },
        { data: { id: 'eight', label: 'Node 8' }, position: { x: 111, y: 455 } },
        { data: { id: 'nine', label: 'Node 9' }, position: { x: 785, y: 127 } },
        // エッジのデータ
        { data: { source: 'four', target: 'two', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'four', target: 'two', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'five', target: 'two', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'one', target: 'six', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'five', target: 'eight', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'one', target: 'seven', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'four', target: 'five', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'one', target: 'six', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'eight', target: 'two', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'one', target: 'seven', label: 'Edge from Node1 to Node2' } },
        { data: { source: 'eight', target: 'nine', label: 'Edge from Node1 to Node2' } },
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

export default Big;