import { useContext } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { DarkModeContext } from '../utils/DarkModeContext.jsx'

function DarkModeComponent() {
    const {isDarkMode , toggleDarkMode } = useContext(DarkModeContext)  

  return (
    <div className={isDarkMode? 'position-relative p-2 m-3 end-0 bg-dark rounded-pill whiteColor' : 'position-relative p-2 m-3 end-0 bg-white rounded-pill primaryColor'} onClick={toggleDarkMode}>
    {!isDarkMode ? <BsMoonStars className="DarkIconSize"/> : <BsSun className="DarkIconSize"/>}
  </div>
  )
}

export default DarkModeComponent