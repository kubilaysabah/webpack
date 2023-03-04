import { merge } from 'webpack-merge'
import CommonConfig from './src/helpers/webpack/webpack.common'
import DevConfig from './src/helpers/webpack/webpack.dev'
import ProdConfig from './src/helpers/webpack/webpack.prod'

const isDev = process.env.NODE_ENV === 'development'

export default merge(CommonConfig, isDev ? DevConfig : ProdConfig)
