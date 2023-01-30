import { useState } from "react";
import CartItems from "./CartItems";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { product } from "../../assets/data/data";

function Card() {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(false);
  };

  return (
    <>
      <div className="card relative cursor-pointer" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon text-xl" />
        <span className="flexCenter flex justify-center items-center absolute -top-3 -right-3 w-4 h-4 bg-black text-white text-[10px] rounded-[50%]">2</span>
      </div>
      <div className={cardOpen ? "overlay fixed top-0 right-0 w-[450px] h-screen p-5 bg-white shadow-lg z-[88]" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem fixed top-0 right-0 w-[450px] h-screen p-5 bg-white shadow-lg z-[88]" : "cardhide hidden"}>
        <div className="title flex justify-between items-center">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon text-2xl" />
          </button>
        </div>
        {product.slice(0, 2).map((item) => (
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
          // quantity={item.quantity}
          // totalPrice={item.totalPrice}
          />
        ))}

        <div className="checkOut absolute bottom-0 left-0 m-8 w-[88%]">
          <button className="p-5 bg-black w-full text-white rounded-lg text-base disabled:text-[#7a7a7a] disabled:cursor-none">
            <span className="mr-20">Priceed To Checkout</span>
            <label htmlFor="" className="border-[1px] border-solid border-[#fff] pl-[10px] pr-[10px]">${10}</label>
          </button>
        </div>
      </div>
    </>
  )
}

export default Card