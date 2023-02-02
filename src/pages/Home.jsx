import React, {createContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Login from './Login'


const Home = ({fetchQuestions}) => {
  /* const [category, setCategory] = useState('HTML') */
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category);
      navigate.push("/quiz");
    }
  };

  return (

      <div className='bg-blue '>
        <div className='bg-blue'>
          <Login />
          <h1>Practica tus conocimientos en la categpría que prefieras.</h1>
          <div>
            <button onClick={handleSubmit(setCategory('HTML'))} >PRUEBAA</button>
            <Link value to="/questions" ><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
          </div>
          <div   >
            <Link to="/questionCSS"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
            <Link to="/questionJS"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
          </div>
          <div>
            <Link to="/questionFIGMA"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
            <Link to="/questionUX"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
          </div>
          <Navbar />
        </div>
      </div>
  )
}

export default Home