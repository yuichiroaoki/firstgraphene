import React from 'react';
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
      error: null,
      isLoaded: false,
      categories : ['Retic','Fbg','WBC','LD','CRP','D-Bil','RBC','AIb','PLT','UIBC','RDW','UN','FER','MCHC','MCH','Cre','MCV','Fe','Hb','T-Bil'],
    };
}

// 所得したデータ型を変換してplotlyに渡す処理がまだでこれでレーダーチャートにデータの表示はされない
componentDidMount() {
  fetch("/api/radar/patient/5")
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        data: result,
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}


  render() {
    const { error, isLoaded, data, categories } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Plot
            data={[
              {
                type: 'scatterpolar',
                r: {data},
                theta: {categories},
                fill: 'toself',
                name: '患者のデータ'
              }
            ]}
            layout={
              {polar: {
                radialaxis: {
                  visible: true,
                  range: [0, 5]
                  }
                }
              }
            }
          />
        </div>
      );
    }
  }
}

export default Charts;