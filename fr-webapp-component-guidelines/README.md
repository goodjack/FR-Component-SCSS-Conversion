# FR Component Guidelines

### Setup Instructions:

1. Clone the develop branch:
`git clone --branch develop <guidelines-repo-url>`

2. Clone a copy of the components repo develop branch:
`git clone --branch develop <components-repo-url>`

3. Update the `config.js` file so that it points to the components repo clone directory. A relative or absolute URL can be used here.

4. Goto the guidelines repo directory and run:
`npm install`

### Run Instructions:

Goto the guidelines repo directory and run:
`npm start`

The default port is 5006.

To change port number, edit the `webpack-dev-server.config.js` file at the declaration of `devServer` (around line #39), provide the appropriate value at `port: 5006,`. Then run `npm start`.
