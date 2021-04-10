import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import CardGrid from './components/CardGrid';
function App() {
  return (
    <div className='App'>
      <Header />
      <Jumbo />
      <CardGrid />
    </div>
  );
}

export default App;
