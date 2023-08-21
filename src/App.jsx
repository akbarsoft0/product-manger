import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
import store from './Store';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Cards />} />
            <Route path='/Cart/:id' element={<CardDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
