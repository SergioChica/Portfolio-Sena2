import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './components/Pages/Home/Home'
import { Header } from "./components/Layouts/Header/Header";
import { Logo } from './components/Logo/Logo';
import { Navbar } from './components/Navbar/Navbar';
import { Items } from './components/Items/Items';
import { Text } from './components/Text/Text';
import { Services } from './components/Pages/Services/Services'
import { References } from './components/Pages/References/References'
import { NotFound } from './components/NotFound/NotFound'


 const AppRoutes = () => {
    let routes = useRoutes ([
      { path:"/", element: <Home />},
      { path:"/services", element: <Services />},
      { path:"/references", element: <References />},
      { path:"/*", element: <NotFound />},
    ])
    return routes
 }

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header>
          <Logo />
          <Text content="Rainbow six" />
          <Navbar>
            <Items content="Home" route='/' />
            <Items content="Services" route='/services' />
            <Items content="References" route='/references' />
          </Navbar>
        </Header>
        <AppRoutes />
      </>
  )
}

export default App
