import React from 'react'
import invariant from 'invariant'
import _ from 'lodash'

class BaseComponent extends React.Component {
    bindHandlers(...handlers) {
        handlers.map((handler) => {
            invariant(this[handler], `cannot bind non-existant handler: ${handler}`)
            invariant(_.isFunction(this[handler]), `cannot bind non-function handler: ${handler}`)

            this[handler] = this[handler].bind(this)
        })
    }
}

export default BaseComponent
