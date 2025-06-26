module.exports = {
  apps: [
    {
      name: "expediate_web",
      script: "dist/main.js",
      env: {
        NODE_ENV: "development",
        FRONTEND_URL: "http://localhost:4000",
      },
      env_production: {
        NODE_ENV: "production",
        FRONTEND_URL: "https://expediate.app",
      },
    },
  ],
};
