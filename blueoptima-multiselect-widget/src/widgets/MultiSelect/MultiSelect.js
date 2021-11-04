import React, { useState, useEffect } from 'react';
import './MultiSelect.css';
import TextField from '../TextField/TextField';
const DropDown = (props) => {
    const [selectedOption, setSelectedOption] = useState(props.selected ? props.selected : null);
    const [filterVal, setFilterVal] = useState("");
    function setFilter(val) {
        setFilterVal(val);
    }

    useEffect(() => {
        setSelectedOption(props.selected);
    }, [props.selected]);



    function onSelect(val) {
        if (val !== selectedOption) {
            props.select(val);
            setSelectedOption(val);
        } else {
            setSelectedOption(val);
        }
    }

    return (<div>
        <TextField
            autoComplete={props.autoComplete}
            setFilter={setFilter}
            keepNull={props.keepNull}
            selectedVal={
                selectedOption
                    ? props.t
                        ? props.t(props.optionKey ? selectedOption[props.optionKey] : selectedOption)
                        : props.optionKey
                            ? selectedOption[props.optionKey]
                            : selectedOption
                    : null
            }
            filterVal={filterVal}
            disable={props.disable}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            inputRef={props.ref}
        />
    
        <div className="option-container">
        <div className="text-primary label-text"> <span className="close"></span> Clear All</div>
            {props.option
                .filter((option) => option.toUpperCase().indexOf(filterVal.toUpperCase()) > -1)
                .map((option, index) => {
                    return (
                        <div className="options-card">
                            <div>
                        <input
                        type="checkbox"
                        className="regular-checkbox"
                        checked={selectedOption === option}
                        onChange={() => null}
                      />
                      </div>
                        <div className="option-item" key={index} onClick={() => onSelect(option)}>
                            {option}
                        </div>
                        </div>
                    );
                })}
        </div>
    </div>)

}
export default DropDown;