import React, {Component} from "react";
import {PLACEHOLDERS} from "../config.ts";

interface SearchInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchInput extends Component<SearchInputProps> {
    render () {
        return (
            <input
                type="text"
                value={this.props.value}
                onChange={this.props.onChange}
                placeholder={PLACEHOLDERS.search}
                style={{padding: '5px', border: '1px solid #ccc', borderRadius: '4px'}}
            />
        )
    }
}

export default SearchInput