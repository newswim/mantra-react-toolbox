import React from 'react'

const FieldWrapper = ({
    children,
    error,
    label
}) => (
    <div className="field">
        <div className="label"><span>{label}</span></div>
        {React.Children.only(children)}
        {(() => {
            if (error) {
                return (
                    <div className="error">
                        <span>{error}</span>
                    </div>
                )
            }
        })()}
    </div>
)

FieldWrapper.propTypes = {
    children: React.PropTypes.node.isRequired,
    error   : React.PropTypes.string,
    label   : React.PropTypes.string.isRequired,
}

export default FieldWrapper
