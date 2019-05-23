const serverless = require('serverless-http');
const express = require('express')
const {Nuxt} = require('nuxt-start')
const path = require('path');

// Import and overwrite nuxt options
let config = require('../nuxt.config.js')
config.render = { etag: true, compressor: { threshold: Infinity }}
config.dev = false

// Create nuxt instance
const nuxt = new Nuxt(config)

// Create Express instance
const app = express()

// Add nuxt.render as express middleware
app.use(nuxt.render)

const handler = serverless(app, {
  type: 'edge-origin-request',
  platform: 'aws'
});

module.exports.handler = async (event, context) => {
  // Make sure nuxt is ready to handle requests
  await nuxt.ready();

  // execute handler
  return await handler(event, context);
};
