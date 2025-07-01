"use client"
import React, { useState } from 'react'
import styles from "./selectComponent.module.css";
type SelectComponentProps = {
  title?: string
  selectOptions: { code: string; name: string }[];
  selectedOption: { code: string; name: string };
}
const SelectComponent:React.FC<SelectComponentProps> = ({ selectOptions, selectedOption, title }) => {
  const [selected, setSelected] = useState(selectedOption);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: { code: string; name: string }) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      {title && <h2 className={styles.dropdown_title}>{title}</h2>}
      <button className={styles.dropdown_button} onClick={() => setOpen(!open)}>
        <span className={styles.dropdown_text}>{selected.name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M5.5575 6.4425L9 9.8775L12.4425 6.4425L13.5 7.5L9 12L4.5 7.5L5.5575 6.4425Z" fill="black"/>
        </svg>
      </button>
      {open && (
        <ul className={styles.dropdown_menu}>
          {selectOptions.map((item) => (
            <li key={item.code} className={styles.dropdown_item} onClick={() => handleSelect(item)}>
              <span className={styles.dropdown_text}>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectComponent