import { createStore, createLogger } from 'vuex'
import turn from './module/turn'

const debug =process.env.NODE_ENV !== 'production'

export default createStore ({
    modules:{
        turn
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})