import './App.css';
import { Routes, Route } from "react-router-dom";
import FirstPage from './components/FirstPage/index';
import SecondPage from './components/SecondPage/index';
import ThirdPage from './components/ThirdPage/index';
import SuccessPage from './components/SuccessPage/index';
import Title from './components/Title/index';
import BasicContainer from './components/BasicContainer/index';

function App() {
  return (
    <BasicContainer>
      <Title />
      <Routes>
        <Route path='/' element={<FirstPage />}></Route>
        <Route path='/1' element={<SecondPage />}></Route>
        <Route path='/2' element={<ThirdPage />}></Route>
        <Route path='/3' element={<SuccessPage />}></Route>
      </Routes>
    </BasicContainer>
  );
}

export default App;
