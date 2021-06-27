import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../actions';

// class App extends Component {
//   render() {
//     const props = this.props;

//     return (
//       <React.Fragment>
//         <div>count: { props.value }</div>
//         <button onClick={ props.increment }>+1</button>
//         <button onClick={ props.decrement }>-1</button>
//       </React.Fragment>
//     )
//   }
// }

// const mapStateToProps = state => ({ value: state.count.value });
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())

// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

const App = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.value);

  const onCountUp = () => dispatch(increment());
  const onCountDown = () => dispatch(decrement());

  return (
    <React.Fragment>
      <div>count: { count }</div>
      <button onClick={ onCountUp }>+1</button>
      <button onClick={ onCountDown }>-1</button>
    </React.Fragment>
  )
}

export default App;