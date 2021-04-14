// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
import { CombinedState } from 'redux';
import { mapStateToProps } from '../containers/homeContainer';
import { Task } from '../store/task/models/task';


describe(`The App Component`, ()=>{
  it(`should map state to props correctly`, ()=> {
      const sampleTask = {
        description:["lalala"]
      }
      const appState={
      task:sampleTask
    }
      const componentState = mapStateToProps(appState)
      expect(componentState).toEqual(sampleTask)
  })
})
