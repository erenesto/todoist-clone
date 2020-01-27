import React from 'react'
import { useCloseDropdown } from '../hooks'

const Dropdown = ({ children, BtnIcon, ...attrs }) => {
  const [dropdownWrapperRef, showDropdown, setShowDropdown] = useCloseDropdown()

  return (
    <div className="dropdown__wrapper" ref={dropdownWrapperRef}>
      <span
        className="dropdown__btn"
        onClick={() => setShowDropdown(!showDropdown)}
        onKeyDown={() => setShowDropdown(!showDropdown)}
        tabIndex={0}
        role="button"
      >
        <BtnIcon />
      </span>
      {attrs && showDropdown && (
        <div className="dropdown">
          <ul className="dropdown__list">{children}</ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
