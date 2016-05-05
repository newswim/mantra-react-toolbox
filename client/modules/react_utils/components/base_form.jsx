/*
This is slightly modified to use React Toolbox's Input component
*/

import {_}             from 'meteor/underscore'
import BaseComponent   from './base_component'
import FieldWrapper    from './field_wrapper'
import {titleCase}     from 'change-case'
import invariant       from 'invariant'
import React           from 'react'
import Input           from 'react-toolbox/lib/input'

class BaseForm extends BaseComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
      errors: props.errors || {}
    }
    this.bindHandlers('onChange','onSubmit')
  }

  render() {
      const {errors,fields,value} = this.state

      return (
          <form onSubmit={this.onSubmit}>
              {fields.map((field,i) => {
                  // Support string fields
                  if (_.isString(field)) {
                      field = {name: field}
                  }

                  // Get the name and title we'll use
                  const name = field.name
                  const title = titleCase(name)
                  invariant(name, 'fields must have a name')

                  // Settings for the field wrapper
                  const wrapperSettings = {
                      key: i,
                      label: title,
                      error: this.state.errors[name],
                  }

                  // Build the input settings
                  let inputSettings = {
                      ...field,
                      onChange: this.onChange,
                  }

                  if (!inputSettings.placeholder) {
                      inputSettings.placeholder = title
                  }

                  if (!_.has(inputSettings, 'value')) {
                      inputSettings.value = value[name]
                  }

                  // Render it
                  return (
                      <FieldWrapper {...wrapperSettings} >
                          {(() => {
                              if (inputSettings.type === 'textarea') {
                                  return <Input multiline={true} {...inputSettings} />
                              }

                              return <Input {...inputSettings} />
                          })()}
                      </FieldWrapper>
                  )
              })}
              {this.renderSubmit()}
          </form>
      )
  }

    renderSubmit() {
        const {renderSubmit} = this.props
        if (renderSubmit) {
            return renderSubmit()
        } else {
            return <button type="submit">Submit</button>
        }
    }

    onChange(e) {
        const {name: fieldName, value: newValue} = e.target
        invariant(fieldName, 'inputs must have a \'name\' property')

        const newState = {
            ...this.state,
            value: {
                ...this.state.value,
                [fieldName]: newValue,
            }
        }

        this.setState(newState)

        const {onChange} = this.props
        if (onChange) {
            onChange(newState.value)
        }
    }

    onSubmit(e) {
        e.preventDefault()
        const {onSubmit} = this.props
        if (onSubmit) {
            onSubmit(this.state.value)
        }
    }
}

BaseForm.propTypes = {
    // todo flesh fields out
    fields: React.PropTypes.array,
    value: React.PropTypes.object,
    errors: React.PropTypes.object,
    renderSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
}

export default BaseForm
