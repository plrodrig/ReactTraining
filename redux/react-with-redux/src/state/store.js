import { createStore, applyMiddleware } from 'redux';

const initialState = {
  people: [
    { id:1, name: { first: "Todd", last: "Thelesser" }, email: "todd2@jpmc.com", picture: { small: "", large: "" }, },
    { id:2, name: { first: "Don", last: "Rojas" }, email: "don@jpmc.com", picture: { small: "", large: "" } },
    { id:3, name: { first: "Todd", last: "Thegreater" }, email: "todd1@jpmc.com", picture: { small: "", large: "" }, },
  ]
};

const rootReducer = (oldState, action) => {
  if (! action.type) return oldState;
  console.log(action);
  if (action.type === "CHANGE_FIRST_NAME") {
    const loc = oldState.people.findIndex(p => p.id === action.id);
    const oldPerson = oldState.people.find(p => p.id === action.id);
    const newPerson = {...oldPerson, name: {...oldPerson.name, first: action.first}};
    const newPeople = [...oldState.people.slice(0,loc), newPerson, ...oldState.people.slice(loc+1) ];
    const newState = {...oldState, people: newPeople};
    return newState;
  } else if (action.type === "SET_PEOPLE") {
    return {...oldState, people: action.newPeople};
  }
  else
    return oldState;
  return oldState;
};

const fetchPeopleMiddleware = ({getState, dispatch}) => next => action => {
  if (action.type === 'FETCH_NEW_PEOPLE') {
    fetch("https://randomuser.me/api?results=5")
    .then(res => res.json())
    .then(obj => obj.results)
    .then(people => dispatch({type:"SET_PEOPLE", newPeople:people}))
  }
  next(action);
}

const middlewares = applyMiddleware(fetchPeopleMiddleware);

export const store = createStore(rootReducer, initialState, middlewares);

