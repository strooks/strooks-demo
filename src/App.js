import 'strooks/styles/index.scss'
import TypeWriter from 'strooks/Components/TypeWriter'

function App() {
  return (
    <div className="vh-100 bg-danger">
      <div className="flex column a-center pt-5 gap-1 black">
        <TypeWriter text="Hello World, my name is André" fontSize={50} clearBlink />
        <TypeWriter text="I have come here to stay" fontSize={30} delay={3.5} clearBlink />
        <TypeWriter text="Ask me anything" fontSize={25} seconds={2} delay={7} />
      </div>
    </div>
  )
}

export default App
