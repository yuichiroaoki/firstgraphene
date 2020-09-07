import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Box from '@material-ui/core/Box';
import Style from './Style';
import avsdf from 'cytoscape-avsdf';
import cytoscape from 'cytoscape';

cytoscape.use( avsdf );

class Small extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      height: window.innerHeight
    }
  }

  componentDidMount = () => {
    this.setState({
      height: window.innerHeight-64
    })
  }

    render() {
      const elements = [
        // ノードのデータ
        { data: { id: 'one', label: 'Node 1' }, position: { x: 100, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 600, y: 300 } },
        { data: { id: 'three', label: 'Node 3' }, position: { x: 400, y: 200 } },
        { data: { id: 'four', label: 'Node 4' }, position: { x: 450, y: 350 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 230, y: 300 } },
        { data: { id: 'five', label: 'Node 2' }, position: { x: 120, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 300 } },
        { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 54 } },
        { data: { id: 'nine', label: 'Node 9' }, position: { x: 450, y: 380 } },
        // エッジのデータ
        { data: { 
            source: 'one', 
            target: 'two', 
            label: 'Edge from Node1 to Node2' ,
            weight: 3.323,
            rank:1
          } 
        },
        { data: { 
            source: 'four', 
            target: 'two', 
            label: 'Edge from Node1 to Node2' ,
            weight: 5.23,
            rank:1
          } 
        },
        { data: { 
            source: 'one', 
            target: 'two', 
            label: 'Edge from Node1 to Node2' ,
            weight: 0.323,
            rank:1
          } 
        },
        { data: { 
            source: 'two', 
            target: 'four', 
            label: 'Edge from Node1 to Node2' ,
            weight: 8.323,
            rank:1
          } 
        },
        { data: { source: 'one', target: 'three', label: 'Edge from Node1 to Node2', weight:2.44 } },
        { data: { source: 'one', target: 'four', label: 'Edge from Node1 to Node2', weight:2.44 } },
        { data: { source: 'two', target: 'four', label: 'Edge from Node1 to Node2', weight:2.44 } },
     ];
     const {height} = this.state;
     const layout = {name: 'avsdf'};

        return (
          <Box height={height}>
            <CytoscapeComponent 
                elements={elements} 
                cy={(cy) => {this.cy = cy}}
                style={ { height:'100%' } }
                layout={layout}
                stylesheet={Style}
                minZoom={0.5}
                maxZoom={2}
                />
          </Box>

        )
    }
}

export default Small;