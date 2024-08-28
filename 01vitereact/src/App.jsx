
import Chai from './chai.jsx'

function App() {
  const username = "Chai aur code"

  return (
    <>
      <Chai />
      <h2>Ek hi tag elemnt return kar sakte hai isliye fragment(empty tag) ke andar band kiya hai</h2>
      <h3>kyunki wo ek tag elemnt hai</h3>
      <h3>Hello {username}</h3>
    </>
  )
}

export default App
