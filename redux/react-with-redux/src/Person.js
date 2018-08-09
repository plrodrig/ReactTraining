import React from 'react';
import {store} from './state/store';

export function Person(props) {
  return (
    <div>
      <h1>{props.name.first} {props.name.last}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  )

  function handleClick() {
    // Use redux to change the first name
    store.dispatch({type: "CHANGE_FIRST_NAME", id: props.id, first:"John"})
    //props.name.first = "John";
  }
}