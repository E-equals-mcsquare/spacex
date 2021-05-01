import path from 'path';
import express from 'express';
// var React = require('react');
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';
import { indexHtml } from './indexHtml';
var React = require('react');
var ReactDOM = require('react-dom');
export const app = express();

// Serve generated assets
app.use(express.static(path.resolve(__dirname, '../build')));
app.use((req, res) => {
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const fullMarkup = indexHtml({
    markup,
  });
  res.status(200).send(fullMarkup);
});