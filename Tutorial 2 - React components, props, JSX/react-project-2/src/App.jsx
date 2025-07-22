import './App.css'
import UserCard from './components/UserCard'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

function App() {
  return (
    <>
    <div className="container">
      <UserCard name="John Doe" img={img1} desc="I am a Software Engineer" style={{"border-radius":"10px"}}/>
      <UserCard name="Henry Roberts" img={img2} desc="I am a Web Developer" style={{"border-radius":"10px"}}/>
      <UserCard name="Matthew Clarke" img={img3} desc="I am a App Developer" style={{"border-radius":"10px"}}/>
    </div>
    </>
  )
}

export default App
