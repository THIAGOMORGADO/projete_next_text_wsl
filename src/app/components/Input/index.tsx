type InputProps = {
  className: string
  placeholder: string
  type: string

  disabled?: boolean
}
export default function TextInput({
  className,
  placeholder,
  type,

  disabled,
  ...rest
}: InputProps) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      {...rest}
    />
  )
}
