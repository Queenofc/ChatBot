import './rootLayout.css'
import{Link,Outlet} from "react-router-dom"

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'>
                <img src ="/logo.png" alt=""/> {/*change the logo*/}
                <span>MindFlow</span>
            </Link>
            <div className="user">User</div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout