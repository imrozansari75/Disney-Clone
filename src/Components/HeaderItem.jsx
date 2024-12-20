import React from 'react'

function HeaderItem( { name, Icon } ) {
  return (
    <div className='text-white flex item-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8'>
      <Icon className='w-6 h-6' />
      <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem