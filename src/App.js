import { AuthContextProvider } from './Context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Signin from './Pages/SignIn/Signin';
import { Container } from '@mui/system';
import Navbar from './Components/Navbar';
import Account from './Pages/Account/Account';
import Protect from './Components/Protect';
import Register from './Pages/Register/Register';

function App() {
  return (
      <div>
            <AuthContextProvider>

              <Navbar />
                
                    <Routes>
                        <Route path='/' element={ <Dashboard /> } />
                        <Route path='/signin' element={ <Signin /> } />
                        <Route path='/signup' element={ <Register /> } />
                        <Route path='/account' element={ 
                            <Protect>
                                <Account /> 
                            </Protect>
                        } />
                    </Routes>
                
            </AuthContextProvider>
      </div>
  );
}

export default App;
