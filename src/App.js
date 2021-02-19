import Nav from './components/Nav';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes />
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
