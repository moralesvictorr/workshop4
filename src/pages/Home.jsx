import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Login from './Login'

const Home = () => {
  return (
    <div className='bg-blue '>
<div className='bg-blue'>
      <Login/>
        <h1>Practica tus conocimientos en la categpría que prefieras.</h1>
        <div>
                   <Link to="/questionHTML"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
                   </div>
                   <div   >
                   <Link to="/questionCSS"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
                    <Link to="/questionJS"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
                   </div>
                    <div>
                    <Link to="/questionFIGMA"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
                    <Link to="/questionUX"><img src="https://tse3.mm.bing.net/th?id=OIP.GwYazx5hwT6OC4F1x9duTAAAAA&pid=Api&P=0" width="70px" alt="" /></Link>
                    </div>
                    <Navbar/>
</div>
    </div>
  )
}

export default Home