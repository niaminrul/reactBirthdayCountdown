import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const second:number=1000;
  const minute:number=second*60;
  const hour:number=minute*60;
  const day :number=hour*24;

  const now:number = new Date().getTime();
  const birthDay:number = new Date(' Augus 27 ,2024 23:59:59').getTime()
  const countDown:number = birthDay-now
  
  const [Cday,setCday] = useState<number>();
  const [Chours,setChours] = useState<number>();
  const [Cminuite,setCminute] = useState<number>();
  const [Cseconds,setCseconds] = useState<number>();
  
  const run =()=>{
    setCday(Math.floor(countDown/day));
    setChours(Math.floor(countDown%day/hour));
    setCminute(Math.floor(countDown%hour/minute));
    setCseconds(Math.floor(countDown%minute/second));
  }
  setInterval(run,second);

  return (
    <div className='container' >
      <div className='countdown' >
        <h1> Countdown to my birthday </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas obcaecati atque? Aliquam architecto illum, dignissimos, amet incidunt at expedita quia, ex error molestiae impedit in est. Numquam, soluta dolor. </p>
      </div>
         <div className='countdown_card'> 
            <div className='card'>
               <h1>{Cday}</h1>
               <label >Day</label>
            </div>
            <div className='card'>
               <h1>{Chours}</h1>
               <label>Hour</label>
            </div>
            <div className='card'>
               <h1>{Cminuite}</h1>
               <label>Minuite </label>
            </div>
            <div className='card'>
               <h1>{Cseconds}</h1>
               <label>Seconds</label>
            </div>
            
         </div>
     
      
     
      
     
    </div>
  )
}



export default App
