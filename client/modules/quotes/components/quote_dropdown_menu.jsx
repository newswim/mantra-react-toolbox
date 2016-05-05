import React from 'react'
import { BaseComponent } from '/client/modules/react_utils'
import style from './dropdown_menu.scss'
// import Dropdown from 'react-toolbox/lib/dropdown'
// import Select from 'react-select'

/* In React, forms fall into two categories, controlled and noncontrolled. With
*controlled* components, the user is mutating some <value> prop and updating
the components state. Noncontrolled components keep their own *internal* state
and do not pass any props.

Since these fields will be user selected, we're using controlled components.

Might be able to abstract the <option> field into separate child component.

see: https://facebook.github.io/react/docs/forms.html#controlled-components

*/

const menus = [
  {
    label: "Taxable",
    name: "taxable",
    options: ['', 'Yes', 'Yes (on cost)', 'No']
  },
  {
    label: "Labor Rate",
    name: "labor",
    options: ['', '75', '85', '90', '95']
  },
  {
    label: "Project Management",
    name: "projectMgmt",
    options: ['', "5% (Standard)", "7%", "9%"]
  },
  {
    label: "Run Length",
    name: "runLength",
    options: ['', "100", "135", "150"]
  }
]

class DropdownMenu extends BaseComponent {
  constructor (props) {
    super(props)
    this.state = {}
    this.bindHandlers('handleChange')
  }

  render() {
    return (
      <div className={style.default__options__wrap}>

        {menus.map((menu) => (
          <div className={style.select__wrapper} key={menu.name}>
            <label>{menu.label}</label>
            <select name={menu.name} onChange={(nativeEvent) => this.handleChange(nativeEvent)}>
              {menu.options.map((val) => (
                <option value={val} key={val}>{val}</option>
              ))}
            </select>
          </div>
        ))}

      </div>
    )
  }

  handleChange(e) {
    console.log(`${e.target.name}: ${e.target.value}`)

    // TODO: update this.state

    const { updateLocalState } = this.props
    const name = e.target.name
    const value = e.target.value
    updateLocalState(name, value)
  }

}

export default DropdownMenu
