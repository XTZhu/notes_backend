module.exports = {
  apps: [
    {
      name: "note-server",
      script: "index.js",
      watch: ".",
      env: {
        COMMON_VARIABLE: "true",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      script: "./service-worker/",
      watch: ["./service-worker"],
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "47.107.71.183",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
