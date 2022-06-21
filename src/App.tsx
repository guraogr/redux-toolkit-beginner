import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { decrease, increase } from './redux/counterSlice';

const App = () => {
  // useSelector: counterSliceで設定したcountの値を取得することができます。
  // stateのドットの直後に設定しているcounterはstore.tsのreducerに設定したオブジェクトのプロパティのcounter。
  // counterSlice.tsファイルのnameで設定した”counter”ではない。
  const count = useSelector((state: RootState) => state.counter.count);

  // Action Creatorsを実行するためにuseDispatchを利用
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      {/* dispatchにAction Creatorsを指定 */}
      <button type="button" onClick={() => dispatch(increase())}>
        Up
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        Down
      </button>
    </div>
  );
};

export default App;
