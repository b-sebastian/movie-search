import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useHistory } from 'react-router-dom';
import { useRef } from "react";

import './SearchBar.css';

const SearchBar = () => {
    const searchTitleId = 'search-title';
    const history = useHistory();
    const inputRef = useRef<HTMLDivElement>(null);

    const onSubmit = () => {
        const inputValue = inputRef.current
            ? inputRef.current.getElementsByTagName('input')[0].value
            : '';
        history.push(`/results/${inputValue}`);
    }

    return (
        <div className='searchBar'>
            <FormControl>
                <TextField className='searchBar-input' ref={inputRef} id={searchTitleId} variant='outlined' label='Movie title [year]'/>
                <FormHelperText id="my-helper-text">You can pass year after the movie title eg. "The Witcher 2000"</FormHelperText>
            </FormControl>
            <Button className='searchBar-submit' variant='contained' color='primary' size='large' onClick={onSubmit}>Search</Button>
        </div>
    );
}

export default SearchBar;
