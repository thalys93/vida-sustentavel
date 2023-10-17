import { useContext } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { DarkModeContext } from '../utils/DarkModeContext.jsx'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

function DarkModeComponent() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

  const renderTooltip = (props) => (
    <Tooltip {...props}>
      Mudar para o modo {isDarkMode ? 'claro' : 'escuro'}?
    </Tooltip>
  )

  return (
    <OverlayTrigger overlay={renderTooltip} placement='bottom'>
      <div className={isDarkMode ? 'position-relative p-2 m-3 end-0 bg-dark rounded-pill whiteColor' : 'position-relative p-2 m-3 end-0 bg-white rounded-pill primaryColor'} onClick={toggleDarkMode}>
        {!isDarkMode ? <BsMoonStars className="DarkIconSize" /> : <BsSun className="DarkIconSize" />}
      </div>
    </OverlayTrigger>
  )
}

export default DarkModeComponent