const env = process ? process.env : {
  NODE_ENV: 'development',
  API_BASE: 'http://localhost:9999'
}

const config = {
  development: {
    api_base: env.api_base
  }
}

export default config[env.NODE_ENV]
