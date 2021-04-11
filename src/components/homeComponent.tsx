import React from 'react';

interface IProps{
    onKeyPressHandler : (event: { key: string; }) => void
}
const HomeComponent = (props:IProps):JSX.Element => {
const {
    onKeyPressHandler,
} = props;
return(
    <div className="header">
        <h1>Add your tasks to the bucket!</h1>  
        <input type="text" placeholder="What needs to be done?" onKeyPress={event => onKeyPressHandler(event)} /> 
        
    </div>
    
);
}

export default HomeComponent;