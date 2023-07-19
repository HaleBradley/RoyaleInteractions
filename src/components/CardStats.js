import React from 'react'
import BalloonImg from '../assets/BalloonCard.webp'

const CardStats = () => {
  return (
    <div className='flex flex-col w-96'>
        {/*Card image and title*/}
        <div className='flex flex-row items-center justify-between'>
            <img src={BalloonImg} alt='Ballon' className='h-50 w-40' />
            <div className='flex flex-col items-center pe-20'>
                <p className='font-bold text-2xl'>Balloon</p>
                <h4 className='text-lg'>Level 11</h4>
            </div>
        </div>
        {/*Card stats*/}
        <div className='grid grid-cols-2 gap-x-20'>
            {/*Col 1*/}
            <div className='flex flex-col item-start'><p>Damage</p><p>640</p></div>
            <div className='flex flex-col item-start'><p>Death Damage</p><p>240</p></div>
            {/*Col 2*/}
            <div className='flex flex-col item-start'><p>Damage Per Second</p><p>320</p></div>
            <div className='flex flex-col item-start'><p>Death Damage</p><p>1680</p></div>
            {/*Col 3*/}
            <div className='flex flex-col item-start'><p>Hit Speed</p><p>320</p></div>
            <div className='flex flex-col item-start'><p>Targets</p><p>Buildings</p></div>
            {/*Col 4*/}
            <div className='flex flex-col item-start'><p>Speed</p><p>Medium</p></div>
            <div className='flex flex-col item-start'><p>Range</p><p>Melee: Short</p></div>
        </div>
    </div>
  )
}

export default CardStats