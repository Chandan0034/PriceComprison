import './App.css';
import {useState} from 'react'
import axios from 'axios';
import Cards from './Components/Cards';
function App() {
  const [query,SetQuery]=useState('');
  const [data,setData]=useState(null);
  const [getPortal,SetGemPrtal]=useState(null);
  const [flipkart,SetFlipkart]=useState(null);
  const [amazon,SetAmazon]=useState(null);
  function changeHandler(event){
    console.log(event.target.value)
    SetQuery(event.target.value)
  }
  function clickHandler(){
    setData(null)
    var url=`http://localhost:8000/api/findByNameSubstring/${query}`
    axios.get(url).then((response)=>{
      setData("Coming")
      console.log((response.data)['AmazonOutput'])
      SetAmazon((response.data)['AmazonOutput'])
      console.log((response.data)['FlipkartOutput'][1])
      SetFlipkart((response.data)['FlipkartOutput'])
      SetGemPrtal((response.data)['GemOutput'])
      SetQuery('');
    })
  }
  return (
    <div className="App">
      <div className='Headers'>
        <div className='inputArea'>
          <input placeHolder="Enter The Product Name" className="QueryMessage" onChange={changeHandler} value={query}></input>
          <button className='SearchQuery' onClick={clickHandler}>Search</button>
        </div>
      </div>
      {
        data?<Cards amazonOutput={amazon} flipkartOutput={flipkart} gemOutput={getPortal}></Cards>:
        <pre>Loading...</pre>
      }
      </div>
  );
}

export default App;
