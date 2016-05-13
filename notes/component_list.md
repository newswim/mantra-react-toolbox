#### Arrow's React Component Tree

> May 13, 2016

Before this project becomes too large, it would be helpful to inventory all of
the components we can safely expect to be required. Those components may also
list their subcomponents (children) if we're referencing an actual view within
Arrow. By _view_, in this case I mean an "actual" UI that an enduser would see
and interact with. Otherwise, I'm going to organize the project into more general,
reusable components, and build up degrees of specificity depending on the implementation.

What does that mean? In React, we can *compose* functions and objects to pass, wrap
or inherit properties from other more-or-less-general-in-use components or functions.

##### State vs. State-less

"Smart" Components are capable of tracking their own internal state with a simple
`this.state` object in the component constructor. Some React APIs maintain state
which the developer might not have access to. For instance, an input field might
or might not update when text is entered, depending on how it is defined.

For performance reasons, it's often beneficial if we can strive to make our components
as state-less as possible. But it's not just about performance, components which
simply display properties are easier to reason about. The data which they display
is typically "dependency injected" or composed from another function. This _could_
be thought or as a model controller, to some degree.... but for now I'm thinking
or them more as 'things that fetch and pass along data.'

#### Toolbox

We're using a UI framework called React Toolbox for many generic components.

Components with props of 'children' indicate that these are used for layout.

In general, all components will take a className prop.

| Component | Props                                           | State          | Actions         | Children                 | example           |
|-----------|-------------------------------------------------|----------------|-----------------|--------------------------|-------------------|
| Cards     | children                                        | field          | onChange        | input                    | Login             |
| Buttons   | color, size, text                               | color          | onClick         |                          | Section           |
| Lists     | content, link (id)                              | selected       | onClick         | row                      | Products          |
| Dropdowns | item, link                                      | active, open   | onClick / hover | input (filter)           | SelectProductType |
| Forms     | children                                        |                | onSubmit        | inputs, buttons, selects | AddNewQuote       |
| Inputs    | required, maxlength label, ref, value, onChange |                | onChange        | text, textarea, checkbox | QuoteName         |
| Layouts   | width, permanentAt scrollY, onOverlayClick      | active, pinned | onOverlayClick  | Panel, Sidebar           | SimpleLayout      |
| NavBars   | fields                                          |                |                 | avatar, information      | TopBar, QuoteInfo |
| Tables    | model, heading, selectable                      |                | onSelect        | rows, headings           | ProductsInSection |
| Links     | color, size, text, href count, icon, label      | active         | onClick         |                          | Logo              |


note - this is more Arrow specific and most of the Toolbox components will have
several optional props in addition to the ones in this table.


#### Current Challenges

I have not come up with a set criteria of why and when a component should be
given its own module and naming convention, and when it should just be included
in another module. Note this module convention is specific to Mantra, however
all React projects should follow some similar architecture otherwise upkeep
might easily get out of hand/become a nightmare, etc.

My current thinking is something like this:

> insert project structure concept


##### Links
- [Markdown Table Generator](http://www.tablesgenerator.com/markdown_tables#)
- [React Toolbox](http://react-toolbox.com/)
