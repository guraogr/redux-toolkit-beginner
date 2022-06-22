import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from './redux/store';
import { decrease, increase } from './redux/counterSlice';
import { User } from './types/users';
import { setUsers } from './redux/userSlice';

const App = () => {
  // useSelector: counterSliceで設定したcountの値を取得することができます。
  // stateのドットの直後に設定しているcounterはstore.tsのreducerに設定したオブジェクトのプロパティのcounter。
  // counterSlice.tsファイルのnameで設定した”counter”ではない。
  const count = useSelector((state: RootState) => state.counter.count);
  const users = useSelector((state: RootState) => state.users.users);

  // Action Creatorsを実行するためにuseDispatchを利用
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = (await res.json()) as User[];
      dispatch(setUsers(data));
    };
    void getPosts();
  }, [dispatch]);

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
      <h2>User</h2>
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

export default App;
