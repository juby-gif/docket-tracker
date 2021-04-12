import React, { Component,lazy } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store/rootStore';
import { addItem } from '../store/task/taskAction';

const HomeComponent = lazy(()=> import ('../components/homeComponent'));


interface IProps{

}

interface StateProps{
    bucketItem : string;
}

interface NewProps {
    handleClick : (data:string) => void;
}

type Props = IProps & AppState & NewProps & RouteComponentProps


class HomeContainer extends Component <Props,StateProps> {
constructor(props:Props){
    super(props);
    this.state = {
        bucketItem:""
    }
    
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    this.onBucketItemChange = this.onBucketItemChange.bind(this);
}

onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>):void => {
    if(event.key === 'Enter'){
        this.onAddItem()
        this.setState({
            bucketItem:"",
        })
      }
    
}

onBucketItemChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    this.setState({
        bucketItem: event.currentTarget.value,
    })
}

onAddItem = ():void => {
   this.props.handleClick(this.state.bucketItem);
}

render(){
    return(
        <div>
            <HomeComponent 
                {...this.state}
                {...this}
                {...this.props}
            />
        </div>
    );
}
}

const mapStateToProps = (state: AppState) => ({
    task: state.task,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleClick: (data:string) => dispatch(addItem(data))
  });

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);