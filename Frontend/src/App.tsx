import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup.tsx'
import { Signin } from './pages/Signin.tsx'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs.tsx'
import { Publish } from './pages/Publish.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App