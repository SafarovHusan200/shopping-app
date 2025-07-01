"use client"

import { useState, useRef, useEffect, ReactNode } from "react"
import "./dropdown.css"

interface DropdownSelectProps {
   label: ReactNode

  options: { label: string; value: string }[]
  value: string
  onChange: (value: string) => void
}

const DropdownSelect = ({ label, options, value, onChange }: DropdownSelectProps) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        {options.find((opt) => opt.value === value)?.label || label}
        <svg
          className={`arrow ${open ? "rotate" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.862 6.19531L7.99998 9.05731L5.13798 6.19531L4.19531 7.13798L7.99998 10.9426L11.8046 7.13798L10.862 6.19531Z"
            fill="#2D3748"
          />
        </svg>
      </button>

      {open && (
        <ul className="dropdown-menu">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              className={value === opt.value ? "active" : ""}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownSelect
