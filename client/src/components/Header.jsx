import { useContext } from "react"
import { AppContext } from "../context/context"
import toggleBtnSvg from "/dark-mode-toggle-icon.svg"
import { Link } from "react-router-dom"

export const Header = () => {
  const { toggle, setToggle } = useContext(AppContext);

  return (
    <header>
      {/* Navigation */}
      <div className={`p-5 mx-10 my-5 static flex flex-row justify-between ${toggle ? 'bg-gray-800' : 'bg-gray-50'} border`} >
        {/* Navigation Left - for Logo */}
        <div>
          <Link to="/" className={`text-xl font-bold ${!toggle ? 'text-gray-700' : 'text-gray-100'}  hover:text-${!toggle ? 'text-gray-600' : 'text-gray-50'} transition-all`} >MakeNote</Link>
        </div>

        <div className="w-52 flex justify-between mr-5 ">
          {/* Dark/Light Mode Btn */}
          <img src={toggleBtnSvg} className={`w-10 cursor-pointer transition-all`} onClick={() => {
            setToggle(!toggle)
          }} />

          {/* Home */}
          <Link to="/" className={`text-lg font-medium ${!toggle ? 'text-gray-700' : 'text-gray-100'}  hover:text-${!toggle ? 'text-gray-600' : 'text-gray-50'} transition-all`} >Home</Link>
          {/* About */}
          <Link to="/" className={`text-lg font-medium ${!toggle ? 'text-gray-700' : 'text-gray-100'}  hover:text-${!toggle ? 'text-gray-600' : 'text-gray-50'} transition-all`} >About</Link>
        </div>

      </div>
    </header>
  )
}