const faceHolder = document.getElementById('face');
const happy = document.getElementById('happy');
const sad = document.getElementById('sad');
const angry = document.getElementById('angry');
const confused = document.getElementById('confused');

function face(state = '<&_&>', action) {
  switch (action.type) {
    case 'Happy':
      return '¯_(ツ)_/¯';
    case 'Sad':
      return '《〠_〠》';
    case 'Angry':
      return '(◡‿◡✿)';
    case 'Confused':
      return '(｡:hearts:‿:hearts:｡)';
    default:
      return state;
  }
}
const store = Redux.createStore(
  face,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  faceHolder.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);

happy.addEventListener('click', function() {
  store.dispatch({ type: 'Happy' });
});

sad.addEventListener('click', function() {
  store.dispatch({ type: 'Sad' });
});
angry.addEventListener('click', function() {
  store.dispatch({ type: 'Angry' });
});
confused.addEventListener('click', function() {
  store.dispatch({ type: 'Confused' });
});
