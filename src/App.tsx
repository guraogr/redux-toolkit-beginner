import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const App = () => {
  // useSelector: counterSliceで設定したcountの値を取得することができます。
  // stateのドットの直後に設定しているcounterはstore.tsのreducerに設定したオブジェクトのプロパティのcounter。
  // counterSlice.tsファイルのnameで設定した”counter”ではない。
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
    </div>
  );
};

export default App;
