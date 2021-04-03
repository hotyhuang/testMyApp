module.exports = {
    apps: [
        {
            name: 'testApp',
            script: 'index.js',
            instances: 1,
            exec_mode: 'cluster',
            output: './pm2_out.log',
            error: './pm2_error.log',
            log_date_format: 'YYYY-MM-DDTHH:mm:SS.SSSZ',
            env: {
                NODE_ENV: 'local',
                PORT: 8080
            },
            env_local: {
                NODE_ENV: 'local'
            },
            env_dev: {
                NODE_ENV: 'dev'
            },
            env_qa: {
                NODE_ENV: 'qa'
            },
            env_staging: {
                NODE_ENV: 'staging'
            },
            env_prod: {
                NODE_ENV: 'prod'
            }
        }
    ]
};
