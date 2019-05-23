# Nuxt.js Serverless SSR using Cloudfront, Lambda@edge and S3

This project demonstrates how you can utilize lambda@edge to create a serverless Nuxt.js server-side rendering solution. This solution offers several benefits over a setup which uses API Gateway + Lambda
* Control over which requests are handled by Nuxt.js and which request can served directly from S3, no need to serve static assets through API gateway + Lambda
* Control over cachability of responses, by either specifying seperate PathPatterns within Cloudfront CacheBehaviors or returning cache-control headers as part of Nuxt.js response
* Global scalability, lambda@edge functions are replicated accross all AWS regions
* Latency, invocation of API Gateway + Lambda has a higher latency
* Costs, per request costs of API Gateway are higher, certainly when using caching

## Required software
* Node.js
* Serverless framework `npm install -g serverless`
* AWS CLI

## Development
* Install NPM dependencies: `$ npm install`
* Serve the project: `$ npm run dev`
* Invoke lambda@edge render function locally `$ npm run invoke`

## Deploy
* Deploy the project: `$ npm run deploy`

## Demo
* Visit [Demo page](https://d2fx7xr3uscglr.cloudfront.net/)
