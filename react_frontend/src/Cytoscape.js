import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Box from '@material-ui/core/Box';
import elements from './cy-conf/elements.js';
import Style from './Style';

class Cytoscape extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      elements: [],
      height: window.innerHeight
    }
  }

  componentDidMount = () => {
    this.setState({
      elements : elements,
      height: window.innerHeight-64
    })
  }

    render() {
      const {elements, height} = this.state;
        return (
          <Box height={height}>
            <CytoscapeComponent 
                elements={elements}
                cy={(cy) => {this.cy = cy}}
                style={ { height:'100%' } }
                stylesheet={Style}
                />
          </Box>

        )
    }
}

export default Cytoscape;