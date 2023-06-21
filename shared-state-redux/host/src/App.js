import Header from 'remote/Header';
import Footer from 'remote/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { clearCount, incrementCount } from './store';

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector(({ counter }) => {
    return { count: counter.count };
  });

  const onClick = () => dispatch(incrementCount());
  // function to clear the count in store.
  const onClear = () => dispatch(clearCount());

  return (
    <div className="App">
      <Header count={count} onClear={onClear} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '300px',
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>HOST count {count}</div>
        <button onClick={onClick}>Increment</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
