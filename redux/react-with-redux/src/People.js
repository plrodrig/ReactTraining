import React from 'react';
import {Person} from './Person';

export function People(props) {

  return (
    <section>
      <h1>List of cool people</h1>
      {props.people.map((p,i) => <Person {...p} key={i} />)}
    </section>
  )
}