module.exports = {
    client: {
      service: {
        name: 'local',
        url: 'https://dr3dd1.stgdgraph.enterprise.stage.thegaas.com/graphql',
      },
      includes: ["src/**/operations.graphql"],
      excludes: ["src/**/*.{ts}"]
    }
  };
