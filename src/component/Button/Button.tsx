import React, {Component} from "react";

interface ButtonProps {
    style?: React.CSSProperties;
    onClick: () => void;
    label: string;
}
class Button extends Component<ButtonProps> {
    render() {
        return (
            <button onClick={this.props.onClick} style={this.props.style}>
                {this.props.label}
            </button>
        );
    }
}
export default Button;