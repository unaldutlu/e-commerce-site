import { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { authActions } from "../../store/authSlice"

function User() {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(false)
  }

  // const dispatch = useDispatch()
  // const logoutHandler = (e) => {
  //   dispatch(authActions.logout())
  // }
  return (
    <>
      <div className='profile ml-[30px] cursor-pointer'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' />
            </button>

            {profileOpen && (
              <div className='openProfile boxItems text-[#000] shadow-lg absolute top-20 right-[10px] w-[250px] bg-[#fff] border border-solid border-[#e6e6e6] rounded-xl p-5' onClick={close}>
                <div className='image flex pb-5'>
                  <Link to='/account'>
                    <div className='img'>
                      <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' className="mr-5" />
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>Eden Smith</h4>
                    <label htmlFor=''>Los Angeles,CA</label>
                  </div>
                </div>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box'>
                  {/* onClick={logoutHandler} */}
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}

export default User
