import { Outlet } from 'react-router-dom'
import NavegationComponent from './components/NavegationComponent.jsx'

function Index() {
  return (    
    <section>
        <NavegationComponent/>
        <Outlet/>
    </section>    
  )
}

export default Index