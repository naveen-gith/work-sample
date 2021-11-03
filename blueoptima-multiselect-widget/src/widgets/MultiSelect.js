import React, { useState, useEffect } from 'react';
import TextField from './TextField';
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
        <div className="options-card" style={props.optionCardStyles}>
            {props.option
                .filter((option) => option.toUpperCase().indexOf(filterVal.toUpperCase()) > -1)
                .map((option, index) => {
                    return (
                        <p key={index} onClick={() => onSelect(option)}>
                            {option}
                        </p>
                    );
                })}
        </div>
    </div>)

}
export default DropDown;