import webpack from 'webpack'
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/build/types/types";
import path from "path";

type Mode = 'production' | 'development'

interface EnvVariables {
    mode?: BuildMode
    port?: number,
    analyzer?: boolean,
    platform?: BuildPlatform
}

const config = (env: EnvVariables): webpack.Configuration => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    }

    return buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop'
    })
}

export default config