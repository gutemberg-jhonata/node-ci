module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@eclass/semantic-release-docker",
      {
        baseImageName: "node-ci",
        registries: [
          {
            url: "docker.io",
            imageName: `docker.io/${process.env.DOCKER_USERNAME}/node-ci`,
            user: process.env.DOCKER_USERNAME,
            password: process.env.DOCKER_PASSWORD
          }
        ]
      }
    ]
  ]
}
