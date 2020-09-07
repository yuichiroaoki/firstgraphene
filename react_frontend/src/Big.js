import avsdf from 'cytoscape-avsdf';
import cytoscape from 'cytoscape';
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Box from '@material-ui/core/Box';
import Style from './Style';
import bigGraph from './cy-conf/bigGraph.json';

// レイアウトの拡張機能追加
cytoscape.use( avsdf );


class Big extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      height: window.innerHeight,
    }
  }

  componentDidMount = () => {
    this.setState({
      // 上部のappbarの分だけ高さを低くする
      height: window.innerHeight-64,
    })
  }

    render() {
     const layout = {name: 'avsdf' };
     const {height} = this.state;


        return (
          <Box height={height}>
            <CytoscapeComponent 
                layout={layout}
                elements={bigGraph} 
                cy={(cy) => {this.cy = cy}}
                style={ { height:'100%' } }
                stylesheet={Style}
                minZoom={0.5}
                maxZoom={2}

                />
          </Box>

        )
    }
}

export default Big;