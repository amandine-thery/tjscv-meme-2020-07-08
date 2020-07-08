
import {createStore} from 'redux';

var initialState={selectedImg:{url:'trololo.jpg', id:0},texts:[], temporaryText:{x:50, y:30, value: 'React is so cool!', fontSize: '12'}, i:0};
export function memeReducer(state=initialState, action) { //memeReducer pour permettre de pouvoir combiner plusieurs reducer
    switch(action.type) {
        case 'ADD_TEMPORARY_TEXT': return {...state, texts:[...state.texts,...state.temporaryText],temporaryText:{x:50,y:0,value:''}};
        case 'RESET_EDITOR': return {...initialState};
        case 'ADD_TEXT': return {...state, texts:[...state.texts,action.value]};
        case 'SELECT_IMG': return {...state, selectedImg: action.value}; 
        case 'INCREM_I': return {...state, i:state.i+=1};
        case 'SAVE_MEME': return {...state, ...action.value};
        case 'SET_TEMPORARY_VALUES': return {...state, ...action.value};
        default:return state;
    }
}; // ; parce que c'est un export de function

let store = createStore(
    memeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //pour redux dev tool sur FF
); // le store possède le state initial
export default store;

//Exemple via import dans App.js
/*let store = createStore(memeReducer); // le store possède le state initial
console.log(store.getState());
store.subscribe(()=>{console.log(store.getState())}); // va afficher un console.log à chaque dispatch
store.dispatch({type: 'SELECT_IMG', value:{id:0, url:'dog1.jpg'}});
store.dispatch({type: 'ADD_TEXT', value:{x:0, y:0, value: 'un texte'}});
store.dispatch({type: 'ADD_TEXT', value:{x:0, y:0, value: 'un autre texte'}});
store.dispatch({type: 'ADD_TEXT', value:{x:0, y:0, value: 'encore un autre texte'}});
store.dispatch({type: 'INCREM_I'});*/


//Exemple fait directement dans la console
/*var returnReducer=reducer(initialState, {type:'ADD_TEXT', value:{x:0,y:0,value:'Mon nouveau Texte'}})
console.log(returnReducer)

returnReducer=reducer(returnReducer, {type:'ADD_TEXT', value:{x:0,y:0,value:'Second Texte'}})
console.log(returnReducer)*/