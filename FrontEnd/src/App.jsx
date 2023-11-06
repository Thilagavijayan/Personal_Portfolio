// import Navbar from "./components/Navbar";

import { useState, useEffect} from "react"


const App = () => {

  const [name, setName] = useState(0)

  useEffect(() => {
    console.log("use effect ran");
  }),[name]
  
  const handlesubmit = () => {
    setName(name + 1)
  }
  return ( 
    <div className="app">
      <h2>{name}</h2>
      <button onClick={handlesubmit}>Like</button>
      {/* <Navbar/> */}
    </div>
   );
}
 
export default App;