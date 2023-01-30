import Medicine from '../../assets/images/Medicine.svg'
import { AiOutlineSearch } from 'react-icons/ai';
import Card from './Card';
import User from './User';

function Header() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    //    @ts-ignore
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <>
      <header className='bg-white p-5 relative shadow-lg z-40 active:sticky active:top-0 active:left-0 active:w-full active:shadow-lg active:z-[9999] active:bg-white'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <img src={Medicine} alt="Medicine" />
          </div>
          <div className='border-2 border-solid border-gray-900 rounded-md text-lg hidden md:flex md:justify-between md:items-center px-5 w-[600px]'>
            <AiOutlineSearch className='text-xl mr-4' />
            <input type="text" placeholder='Search...' className='outline-none p-4 w-full text-base' />
          </div>
          <div className="flex justify-between items-center">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header