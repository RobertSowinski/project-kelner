import React from 'react';
import styles from './TextInput.module.scss';

const TextInput = ({ value, onChange, className }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className={`${styles.input} ${className}`}
        />
    );
};

export default TextInput;