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
      repo: "git@github.com:XTZhu/notes_backend.git",
      path: "/www/wwwroot/root/note_server/",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
