import React from "react";
import styles from "./MySelect.module.scss"

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={styles.select}
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
        >
            <option key={value} disabled value={defaultValue}>{defaultValue}</option>
            {options.map(option =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
            )}
        </select>
    );
};

export default MySelect;