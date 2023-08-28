module.exports = {
    apps : [
      {
        name: 'API-MAIN',
        script: 'src/api/index.js',
        instances: 2,
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'API-MYSQL',
        script: 'src/mysql/index.js',
        instances: 2,
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'API-POST',
        script: 'src/posts/index.js',
        instances: 2,
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ],
  };