import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import QueryData from './queryData';
import { useState } from 'react';


const InputValue = () => {


    const [searchValue, setValue] = useState('');

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     <QueryData searchValue={searchValue} />
    // }

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter the ID to Search Details"></AppBar>
                <TextField
                    hintText="Enter your ID"
                    name="ID"
                    value={searchValue}
                    onChange={(e) => setValue(e.target.value)}
                ></TextField>
                <br />

                {/* <RaisedButton
                    label="Search"
                    primary={true}
                    onClick={onSubmit}
                ></RaisedButton> */}


            </React.Fragment>
            {searchValue ? <QueryData searchValue={searchValue} /> : "No data to Show, please enter the  name"}

        </MuiThemeProvider>
    )
}
export default InputValue
