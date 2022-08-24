import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path: path.resolve(__dirname, "../config/config.env")})

interface ENV {
    MONGO_URI: string | undefined
}

interface Config {
    MONGO_URI: string
    
}

const getConfig = ():ENV => {
    return {
        MONGO_URI: process.env.MONGO_URI,
    }
}

const getSanitzedConfig = (config: ENV): Config => {
    for (const [key,value] of Object.entries(config)) {
        if (value === undefined) {
            console.log(`Missing key ${key}`)
            throw new Error(`Missing key ${key}`)
        }
    }
    return config as Config;
}
const config = getConfig()

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;