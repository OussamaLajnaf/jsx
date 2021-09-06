import jsx from "./image/imageReact.jpg"

import  "./style.css"

function App() {
  return (
    <div className="App">
   <h1 className="titleRed">  React</h1><br/>
     <img className="img1" src="/image/imageReact.jpg" alt=""/><br/>
     <img className="img2" src ={jsx} alt ="jsxp"/><br/>
     <video controls  src="C:\Users\lenovo\Downloads/SQUAD DOWN.mp4"/>


    </div>
  );
}

export default App;