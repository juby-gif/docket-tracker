import React, { Component,lazy } from 'react';
import { RouteComponentProps } from 'react-router';

const HomeComponent = lazy(()=> import ('../components/homeComponent'));
interface IProps{

}

interface StateProps{
}
export default class HomeContainer extends Component <IProps & RouteComponentProps,StateProps> {
constructor(props:IProps & RouteComponentProps){
    super(props);
    this.state = {
    }
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
}

onKeyPressHandler = (event: { key: string; }):void => {
    if(event.key === 'Enter'){
        console.log('enter press here! ')
      }
}
render(){
    const {onKeyPressHandler} = this;
    return(
        <div>
            <HomeComponent 
                onKeyPressHandler={onKeyPressHandler}
            />
        </div>
    );
}
}