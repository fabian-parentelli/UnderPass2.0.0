import LoginProvider from "./context/LoginContext"
import RoutesComp from "./routers/Routes"

function App() {

  return (
    <LoginProvider>
        <RoutesComp />
    </LoginProvider>
  )
}

export default App
