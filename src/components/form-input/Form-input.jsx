import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <div className="group">
        <input className="form-input" {...otherProps} />
        {label && (
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  )
}

export default FormInput
