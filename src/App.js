import 'strooks/styles/index.scss'
// import TypeWriter from 'strooks/Components/TypeWriter'

import { useMemo, useRef } from 'react'
import ThemeToggler from 'strooks/Components/ThemeToggler'
import useStyleVars from 'strooks/Hooks/useStyleVars'
import useForm from 'strooks/Hooks/useForm'

function App() {
  const { styleVars, colors, propsMap, setVar } = useStyleVars()
  const formRef = useRef()
  const [state, onChange] = useForm(formRef)
  const createNewProp = ev => {
    ev.preventDefault()
    const { prop, val } = state
    setVar(prop, val)
  }

  const data = useMemo(
    () =>
      Object.keys(styleVars).map((k, idx) => {
        return { 'js prop': k, 'css var name': propsMap[k], value: styleVars[k] }
      }),
    [styleVars]
  )

  return (
    <div className="vh-100 bg-danger j-between flex column">
      {/* <div className="flex h-50 column a-center pt-5 gap-1 black">
        <h1 className="mb-3">Type Writer</h1>
        <TypeWriter text="Hello World, my name is André" fontSize={30} clearBlink />
        <TypeWriter text="I have come here to stay" fontSize={25} delay={3.5} clearBlink />
        <TypeWriter text="Ask me anything" fontSize={20} seconds={2} delay={7} />
      </div> */}
      <div className="h-100 bg-dark p-5">
        <div className="flex a-center gap-5 p-3 center primary">
          <h1>useStyleVars hook</h1>
        </div>

        <div className="use-style-vars bg-info-dark p-5 info-light">
          <div className="flex j-between mb-3">
            <ThemeToggler />
            <div>
              <label className="block text-center pb-1 dark">Add new Var</label>
              <form
                onChange={onChange}
                onSubmit={createNewProp}
                ref={formRef}
                className="flex gap-2"
              >
                <input name="prop" className="p-2" type="text" placeholder="prop" />
                <input name="val" className="p-2" type="text" placeholder="val" />
                <button className="p-2">Add</button>
              </form>
            </div>
          </div>
          <div className="flex j-around text-center mb-4">
            <h3>JS Var Name</h3>
            <h3>CSS Var Name</h3>
            <h3>Value</h3>
          </div>

          {Object.entries(styleVars).map(([prop, val]) => (
            <>
              <div className="flex mb-2 j-between dark text-center">
                <h4 style={{ flex: '1 0 33%' }}>{prop}:</h4>
                <h4 style={{ flex: '1 0 33%' }}>{propsMap[prop]}</h4>
                <div style={{ flex: '1 0 33%' }}>
                  {prop.startsWith('color') ? (
                    <input
                      type="color"
                      onChange={ev => {
                        setVar(prop, ev.target.value)
                      }}
                      defaultValue={val}
                    />
                  ) : (
                    val
                  )}
                </div>
              </div>
              <hr className="black" />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
