const pgConfig = {
    development: {
        client: 'pg',
        connection:{
            host: 'ldpg-cjilvcj37aks73bmjugg-a.oregon-postgres.render.com',
            user: 'vms',
            password: 'btQYcc9x61yN3J6DNCT5FJc0Zg0WcCos',
            database: 'prueba_zilg',
            ssl: { rejectUnauthorized: false}
        }
    }
}

module.exports = pgConfig;
