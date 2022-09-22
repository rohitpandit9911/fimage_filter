import React from 'react'
import AllData from './AllData'

function App() {
  return (
    
   <div className='container'>
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
     {
      AllData.map((value)=>{
        return(
            <img src={value.image} alt='image '  className='img-fluid'/>
        );
      })
     }
    </div>
   </div>
  
  )
}

export default App