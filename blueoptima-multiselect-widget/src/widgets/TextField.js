import React, {useState, useEffect} from 'react';

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
  
  
    return (
      <input
        ref={props.inputRef}
        className={`employee-select-wrap--elipses ${props.disable && "disabled"}`}
        type="text"
        value={value}
        autoComplete={props.autoComplete || "on"}
        onChange={inputChange}
        onClick={props.onClick}
        readOnly={props.disable}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder}
      />
    );
  };
  export default TextField;