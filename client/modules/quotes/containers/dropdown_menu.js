import {useDeps, composeAll, composeWithTracker} from 'mantra-core'

import DropdownMenu from '../components/quote_dropdown_menu.jsx'

export const composer = ({context}, onData) => {
    // const {Meteor, Collections} = context()

    onData(null, {})
}

export const depsMapper = (context, actions) => ({
    context: () => context,
    updateLocalState: actions.dropdown_menu.updateLocalState
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(DropdownMenu)
