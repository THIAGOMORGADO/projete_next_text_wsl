import React from 'react'

type ButtonProps = {
  className: string
  children?: React.ReactNode
  isDisabled?: boolean
  onClick?: () => void
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
