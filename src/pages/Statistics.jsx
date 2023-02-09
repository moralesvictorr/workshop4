import React from 'react'
import Navbar from '../layout/Navbar'
import Timer from '../components/Timer'
import { renderTime } from '../components/Timer'

const Statistics = () => {
  return (
    <div className='flex flex-col bg-slate-800 h-screen w-screen mx-auto text-white'>
      <div className='flex flex-col mx-auto w-4/6 gap-3'>
        <h1 className='text-2xl '>Statistics</h1>

        <div className='flex flex-col gap-2 '>
          <div className='flex justify-between border-solid border-2 border-white rounded-lg p-2 h-auto w-auto gap-1'>
            <div className='flex gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="" 
              class="
              w-6 
              h-6 
              stroke-white
              stroke-2
              ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className=''>Tiempo de estudio :</h2>
            </div>
            <h2 className=''>{renderTime()}</h2>
        </div>
        <div className='flex justify-between border-solid border-2 border-white rounded-lg p-2 h-auto w-auto'>
          <div className='flex gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="w-6 h-6 stroke-white stroke-2 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
            <h2>Respuestas contestadas :</h2>
          </div>
          <h2>{localStorage.getItem("totalQuestions")}</h2>
        </div>
        <div className='flex justify-between border-solid border-2 border-white rounded-lg p-2 h-auto w-auto'>
          <div className='flex gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="w-6 h-6 stroke-white stroke-2 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
            <h2>Respuestas correctas :</h2>
          </div>
          <h2 className='text-green-500'>{localStorage.getItem("correctQuestions")}</h2>
        </div>
        <div className='flex justify-between border-solid border-2 border-white rounded-lg p-2 h-auto w-auto'>
          <div className='flex gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="w-6 h-6 stroke-white stroke-2 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
            <h2>Respuestas incorrectas :</h2>
          </div>
          <h2 className='text-red-700'>{localStorage.getItem("incorrectQuestions")}</h2>
        </div>
      </div>
      </div>
      <div className='mx-auto mt-9'>
        <p  className='text-gray-600'>By : Marian, Victor, Giovani, Julio</p>
      </div>
      <Navbar />
    </div>
  )
}

export default Statistics