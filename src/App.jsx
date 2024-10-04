import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import MenuComp from './components/MenuComp'
import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Contact from './pages/Contact'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter basename='/MERNReactVite'>
      <MenuComp/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

// export default App
