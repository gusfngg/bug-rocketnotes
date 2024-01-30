import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../Pages/Signin';
import { SignUp } from '../Pages/Signup';

export function AuthRoutes () {
   return (
      <Routes>
         <Route path='/' element={<SignIn/>}/>
         <Route path='/register' element={<SignUp/>}/>
      </Routes>
   )
}