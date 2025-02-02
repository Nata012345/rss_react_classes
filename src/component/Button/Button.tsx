import React, { Component } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  style?: React.CSSProperties;
  onClick: () => void;
  label: string;
  className?: string;
}
class Button extends Component<ButtonProps> {
  render() {
    const { onClick, style, label, className } = this.props;
    return (
      <button
        onClick={onClick}
        style={style}
        className={`${styles.button} ${className ? styles[className] : ''}`.trim()}
      >
        {label}
      </button>
    );
  }
}
export default Button;
