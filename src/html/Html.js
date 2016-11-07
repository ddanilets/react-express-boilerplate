import React from 'react';
import serialize from 'serialize-javascript';
import ReactDOM from 'react-dom/server';

const Html = (props) => {
  const content = props.component ? ReactDOM.renderToString(props.component) : '';
  const state = props.store.getState();
  return (<html>
    <head />
    <body>
      <div dangerouslySetInnerHTML={{ __html: content }} id="app" />
      <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(state)};` }} />
      <script src="../build/js/main.js"></script>
    </body>
  </html>);
};

Html.propTypes = {
  component: React.PropTypes.object,
  store: React.PropTypes.object,
};

export default Html;
