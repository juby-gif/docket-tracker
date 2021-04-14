import React from 'react';

interface IProps {
    onBucketItemChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPressHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    bucketItem: string;
    task:{description:string[]}
    }
const HomeComponent:React.FC<IProps> = (props:IProps):JSX.Element => {
const {
    onBucketItemChange,
    onKeyPressHandler,
    bucketItem,
    task,
} = props;
return(
    <div className="header">
        <h1>Add your tasks to the bucket!</h1>  
        <input type="text" placeholder="What needs to be done?" onChange={onBucketItemChange} value={bucketItem} onKeyPress={event => onKeyPressHandler(event)} /> 
        <div className="container" >
        <ul className="list-items">
            {task.description.map((item) => {
                return <li key={item}>{item}</li>
            })}
        </ul>
        </div>
    </div>
);
}

export default HomeComponent;
