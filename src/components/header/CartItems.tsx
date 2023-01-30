import { useState } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface Props {
  id: number, cover: string, name: string, price: number
}
function CartItems({ id, cover, name, price }: Props) {

  return (
    <>
      <div className='cardList' key={id}>
        <div className='cartContent py-10 flex'>
          <div className='img w-[105px] h-[105px] rounded-md relative mr-5 after:content-none after:absolute after:top-0 after:left-0 after:w-[105px] after:h-[105px] after:bg-[rgba(0, 0, 0, 0.3)] after:rounded-xl after:opacity-0 after:transition after:duration-500'>
            <img src={cover} alt='' className='w-full h-full' />
            <button className='remove absolute top-[40%] left-[40%] w-6 h-6 rounded-[50%] bg-[#fff] z-1 cursor-pointer opacity-0 text-lg transition duration-500 flexCenter'>
              <AiOutlineClose />
            </button>
          </div>
          <div className='details'>
            <p>{name}</p>
            <label htmlFor='' className='block my-[10px]'>Unit Price ${price}</label>
            <div className='price flex justify-between mt-[10px]'>
              <div className='qty bg-[#212121] rounded-md shadow-[0 2px 4px rgb(0 0 0 / 8%)] flexCenter'>
                <button className='plus h-[35px] w-[35px] bg-[#212121] text-white transition duration-500 rounded-t-md rounded-l-md'>
                  <AiOutlinePlus />
                </button>
                <button className='num h-[35px] w-[35px] bg-[#212121] text-white transition duration-500 text-lg'>1{"quantity"}</button>
                <button className='minus h-[35px] w-[35px] bg-[#212121] text-white transition duration-500 rounded-r-[5px] rounded-b-[5px]'>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className='priceTitle text-sm'>${"totalPrice"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItems