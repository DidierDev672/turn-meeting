import { createStore, createLogger } from 'vuex'
import turn from './module/turn'
import user from './module/user'

const debug =process.env.NODE_ENV !== 'production'

export default createStore ({
    modules:{
        turn,
        user
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})