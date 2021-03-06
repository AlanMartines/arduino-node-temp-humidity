var React = require('react');

var DefaultLayout = require('../layouts/default');

var Login = require('./login');

module.exports = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <section>
          <a href="/auth/facebook">
            <img src="/img/facebook.png" alt="facebook auth" />
          </a>
          <a href="/auth/github">
            <img src="/img/github.png" alt="github auth" />
          </a>
          <a href="/auth/twitter">
            <img src="/img/twitter.png" alt="twitter auth" />
          </a>
          <a href="/auth/google">
            <img src="/img/google.png" alt="google auth" />
          </a>
          <a href="/auth/linkedin">
            <img src="/img/linkedin.png" alt="linkedin auth" />
          </a>
          <br />
          <h2>OR</h2>
          <br />
          <Login />
        </section>
      </DefaultLayout>
    )
  }
});
