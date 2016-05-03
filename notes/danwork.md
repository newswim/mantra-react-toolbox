April 19

Some top level React Toolbox components seem to not accept classes from modules.
This seems to be from their being overridden by RT's own stylesheet.

I don't think I can make this method repeatable due to the ``<Input />`` element's
onChange event seeming to only return a string containing the input's value
I could of course be wrong.. need to read up on any way to possibly destructure
the onChange event-- Ideally so that I can include a reference to the LocalState.
For now, I should probably just make separate events and handlers for each field.

I think the Mantra way of doing things is to make a sub-component
so your "dumb" components get 'props' which give it an identity
Fundamentally, this is a bit different from other MVCs. WE'LL need
to keep reference somewhere. But, the user's interface looks something
like this:

```js

-        / view
-  / ?       / stateRef
-            / data                  // containers
-    /persistent     /only temporarily stored
-    /blocking       /non-blocking
-    /call / method  /reactive
```


Meteor keeps track by giving everything in the database
an ID. Similarly, Mongo will return a status whenever any
change is made. By tracking these responses, "Optimistic UI"
Meteor is about to distribute the source of truth, via delivering
to its clients a confirmation and/or update (subscriptionally delimited)
The probably with JavaScript is the getting down into the properties of
deeply nested components

If, at the lowest level, components are just displaying the props
superficially, then however the get updated can be artbitrary,
all components are simply being fed data.
Mantra lets us tie our logic (containers / composers) directly
to our UI elements

If we think of these actions first, the dressings can also be
arbitrary (ie, componentalized and easily abstracted)


##### Higher order functions


Coming at it from the other way, specifying props and proptypes
is the only way I can think to pass references

those references are linked to stores which update
rather that the Flux architecture of keeping a store for every state
(otherwise no updating could occur) // Redux keeps one overarching store
that way an address of the referent "/App/db/entry\point/component/sets of things"
since the data is actually residing on the parent component, I can share
between our sibling comps.

The difference in Mantra being that a copy of the entire store is seemingly
not passed every time, however the Meteor object passed (via being a parent element)
so eventually these props meet back up again, since a reference to the common object
is always stored farther up.

This changes to the Meteor / web-pack version of architecture actually
removes the Collection (and arguably the ability to alter, although
there is only whatever security preventions that were bothered to be
put in place...) entirely from the window of the UI. At least, you don't
get the data once it's been delivered. The bundle (and therefore, if
LocalState ever did decide to persist to Global -- and references to the
whole app were made available -- we would be able to perform (via git
or something similar) similar back stepping algorithm and diff
the current state against some other state-- however since we've record the
whole thing, it's just a matter of asking for the value at that (whatever)
address, and it's made available).



> April 22

#### Tracking data history over time

I'm going to try tracking the history of a collection's values in a separate collection. For example, whenever an upsert occurs on collection A, an insert that includes a shallow copy of that object will be pushed into collection B. This doesn't need to happen chronically or with any particular reference, since the copy will include a product id (important for the later look-up), and we can simply publish the matching ProductHistory collection sorted by a CreatedAt / ModifiedAt date.

This method does seem somewhat expensive, in terms of storage, but we can programmatically garbage collection docs older than, say the last 10 updates -- however, this would only be necessary if long-term memory does become an issue (which I don't expect given the fairly limited scope of DB requirements).

One question I have is how the history will actually be stored. This is an implementation detail, however there seems on the surface at least to be a different between an object looking like:

```
ProductHistory
> _id : _id
> ref : ref // id of product from Products
> foo : foo
> bar : bar

// and / or

ProductHistory
> _id : _id
> ref : {
> > _id : _id // id of product from Products
> > foo : foo
> > bar : bar
>  }

```

This may just be a superficial difference, but will factor in to the sub/pub logic.

- - - - - - - - - - - - - - - -

Also wonder about sending search params as a selector object to a publication.

- - - - - - - - - - - - - - - -

After a bit of looking, I think I'll try Jed Watson's *React-Select* component.
He uses React-Virtualized to render the list data, and I plan to try that library
for rendering the pricesheets, so that's win from reusability. To that note,
be careful when deciding on a library because the React ecosystem has undergone
a remarkable amount of change in the past year - 18 months, so even libs that
were cutting edge last summer, may be irrevocably broken in React v15+

My main criteria are:
- number of commits and their frequency
- diligence responding to issues and PRs
- using v15
- passing tests

And on that note, I'm going to hold off using React-Select until some of the
[latest PRs](https://github.com/JedWatson/react-select/pulls) get merged.

> April 25

- Found another Select component library, http://react-component.github.io
- and another: https://github.com/souporserious/selectly

> April 29th

- Another infinite list component -> https://github.com/orgsync/react-list
- Need to click on a Quote and go to route with that Quote's information
- (click) {quote} -> go('quote/:{quote.quoteId}') -> find quote(id) + associated docs

> May 2nd

Linter
- Getting into ESLint, for now I'm allowing all `console.log` statements, but remember
that they'll need to be removed in the future.
- same for `no-multi-spaces` rule.
- same for `camelcase`
- increased max line length

Immediate goals:
- Finish ProductList component, just a big smart component for now
- Create some relational look ups so that we can add products to a quote.
- create "add product" component
- MDG has a Validated Method package which might combine the Schema and Form validation
I've been needing - [examples in the tests](https://github.com/meteor/validated-method/blob/master/validated-method-tests.js).

##### Notes

Validation of forms and methods has been contentious, but MDG seems to have settled
on a few packages which play nicely with Simple-Schema. For now, I'll try to keep
as closely as possible to Meteor conventions, esp. since several parts of this stack
are on a first-encounter basis (React, Mantra, ES6...).

The other major hurdle right now is publishing relational data. Publish-Composite has
not been updated in some time, but it still seems to be fairly widely used, and gives
are fairly straight-forward way of nesting publications. However, just following the
docs and updating a publication whenever a document changes (via .added or .changed)
should suffice for now.

Review these packages for patterns:
- https://github.com/meteor/validated-method
- https://github.com/meteor/validation-error
