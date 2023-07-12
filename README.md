# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Common Issues

1. After installing the dependencies and trying to run the local dev server you may receive the following error : 

    `Error: error:0308010C:digital envelope routines::unsupported`

    OpenSSL is incompatible with newer versions of Node.js, downgrade Node.js to v16 using NVM

    [NVM Tutorial](https://www.keycdn.com/blog/node-version-manager)