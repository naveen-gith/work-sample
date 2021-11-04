import React, { useState, useEffect } from 'react';
import './TextField.css'
const TextField = (props) => {
  const [value, setValue] = useState(props.selectedVal ? props.selectedVal : "");;
  useEffect(() => {
    if (!props.keepNull) props.selectedVal ? setValue(props.selectedVal) : setValue("");
    else setValue("");
  }, [props.selectedVal, props.forceSet, props.keepNull]);

  function inputChange(e) {
    if (props.freeze) return;

    setValue(e.target.value);
    props.setFilter(e.target.value);
  }


  return (<div className="input-coniatiner">
    <div className="search-wrapper">
      <div className="search">
        <div className="search__circle"></div>
        <div className="search__rectangle"></div>
      </div>
    </div>
    <div className="input-filed-container">
    <input
      ref={props.inputRef}
      className="input"
      type="text"
      value={value}
      autoComplete={props.autoComplete || "on"}
      onChange={inputChange}
      onClick={props.onClick}
      readOnly={props.disable}
      autoFocus={props.autoFocus}
      placeholder={props.placeholder}
    />
    </div>

  </div>
  );
};
export default TextField;