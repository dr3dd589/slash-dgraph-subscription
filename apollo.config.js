module.exports = {
    client: {
      service: {
        name: 'local',
        url: 'https://dr3dd.ap-south-1.aws.cloud.dgraph.io/graphql',
      },
      includes: ["src/**/operations.graphql"],
      excludes: ["src/**/*.{ts}"]
    }
  };
