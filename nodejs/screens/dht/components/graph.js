var React = require('react');

var initChart = require('../../../lib/graph.js');

var chartD3 = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  getInitialState : function () {
    return {
      width: 1000,
      height: 500,
      margins : {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      },
      yLeftDomain: [50, 82],
      yRightDomain: [20, 50]
    };
  },
  onTempEnter: function (event) {
    if (event.key === 'Enter') {
      this.onTempChange(event.target.value);
    }
  },
  onTempChange: function (value) {
    this.setState({
      yLeftDomain: value.split(',')
    });
  },
  onHumEnter: function (event) {
    if (event.key === 'Enter') {
      this.onHumChange(event.target.value);
    }
  },
  onHumChange: function (value) {
    this.setState({
      yRightDomain: value.split(',')
    });
  },
  componentDidUpdate: function () {
    document.getElementById('visualization').innerHTML = '';
    initChart(Object.assign(this.state, {
      dht: this.props.data
    }));
  },
  render: function () {
    return (
      <div className="container">
        <div className="row margin-top-20 margin-bottom-20">
          <div className="col-md-12">
            <h2>Temperature and humidity over time</h2>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-addon" id="temp">Temperature [low, high]</span>
              <input type="text" ref="yLeftDomain" className="form-control" placeholder={this.state.yLeftDomain} onKeyPress={this.onTempEnter} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-addon" id="temp">Humidity [low, high]</span>
              <input type="text" ref="yRightDomain" className="form-control" placeholder={this.state.yRightDomain} onKeyPress={this.onHumEnter} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = chartD3;
