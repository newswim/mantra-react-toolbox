```js
LocalState.set('my-template',{
    name: {
        value: 'blah',
        error: 'Name has been taken'
    },
    password: {
        value: 'xxx'
    }
})

insertQuote({Meteor, LocalState}, quote) {
    try {
        const result = Meteor.call('insert-it', quote)
    } catch (e) {
        LocalState.set('my-template-state', mergeErrors(quote, e.fields))
    }

    FlowRouter.go('my-route-name')
}

const state = LocalState.get('my-template');
Meteor.call('insert-it', state, (err, data) => {
    if (err) {
        LocalState.set('MY_TEMPLATE_ERROR', mergeErrors(err, state))
        return
    }

    /*
    err = {
        name: 'Name has been taken',
    }
*/

    if (err) {

    }
    FlowRouter.go('blah2');
})

const mergeErrors = (err, oldState) => {
    newState = _.map(_.keys(oldState), (key) => {
        const {error, ...props} = oldState[key];
        return {...props, errResult[key]

        let newValue = _.omit(oldState[key], 'error')

    })
}
```
