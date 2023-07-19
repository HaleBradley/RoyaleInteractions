import React from 'react'
import BarbariansImg from '../assets/BarbariansCard.webp'
import HunterImg from '..//assets/HunterCard.webp'
import SparkyImg from '..//assets/SparkyCard.webp'
import ValkyrieImg from '..//assets/ValkyrieCard.webp'
import XBowImg from '..//assets/X-BowCard.webp'

const CardSelector = () => {
  return (
    <div>
        <h1 className='font-bold text-2xl text-center py-4'>Cards</h1>
        <div className='grid grid-cols-5 gap-1'>
            <img src={BarbariansImg} alt='Barbarians' className='h-36 w-28' />
            <img src={HunterImg} alt='Hunter' className='h-36 w-28' />
            <img src={SparkyImg} alt='Sparky' className='h-36 w-28' />
            <img src={ValkyrieImg} alt='Valkyrie' className='h-36 w-28' />
            <img src={XBowImg} alt='X-Bow' className='h-36 w-28' />
        </div>
    </div>
  )
}

export default CardSelector