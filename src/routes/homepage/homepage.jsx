import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="left">
        <h1>MindFlow</h1>
        <h2>Write your tagline here</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
        </h3>
        <button>Get Started</button>
    </div>
    <div className="right"></div>
    </div>
  )
}

export default Homepage