
import './App.css';
import  image from "./myImage.jpg"

function App() {
  return (
    <div className="App" style={{border:"solid 1px noir" , maxwidth:"100vW"}}>
          
          
              <h1 className="title">Safa</h1>
                <br/>
                <img src={image} className="img" style={{width:"50%",height:"50%"}} alt='myImage'/>
                <br/>
                <img src="/myImage5.jpg" className="img1" style={{width:"50%",height:"50%"}}alt='myImage5'/>
                <br/>
                <iframe width="960" height="5n15" src="https://www.youtube.com/embed/mU6anWqZJcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   

    </div>
  );
}

export default App;
