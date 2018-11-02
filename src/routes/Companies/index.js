import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'companies',
  
  getComponent (nextState, cb) {

    require.ensure([], (require) => {
      const Overview = require('./containers/Overview').default
      const reducer = require('./reducers/index').default

      injectReducer(store, { key: 'datas', reducer })

      /*  Return getComponent   */
      cb(null, Overview)

    /* Webpack named bundle   */
    }, 'companies')
  }
})