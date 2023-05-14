import React from 'react'
import { useState } from "react";

function Header() {
  const [hight,setHight]=useState("")
  const [weight,setWeight]=useState("")

  const[bmi,setBmi]=useState(0)

  function calc(){
    let vazn=weight*1
    let boyi=hight/100*1
    if(boyi&&vazn){
      const res=vazn/(boyi*boyi)
      res.toFixed(1)
      setBmi(res.toFixed(1))

      
    }

  
   return(
    console.log(bmi),
    bmi,
    <p className="resDiagram" >{bmi&&bmi>20?"salom":"yomon"}</p>
   )
  }



  return (
  <>
  <header className='header'>
    
  <div className="img">  <div className="info">
        <h1 className="info-title">Body Mass Index Calculator</h1>
        <p className="info-text">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
    </div></div>
    <div className="calc-tablet">
        <h3 className="tablet-title">Enter your details below</h3>
      <form action="#" className='radio-wrap'>
        <div className="met-wrap"><input type="radio" name='below' id='met'/> <label className='labheight' htmlFor="met">Metric</label></div>
        <div className="imp-wrap"><input type="radio" name='below' id='imp'/><label htmlFor="imp">Imperial</label></div>
      </form>
   <div className="all-input-wrap">
   <div className="h-wrap"> 
       <span>Height</span>
      <input 
      className='height inpt' 
      type="number" 
      placeholder='0'
      value={hight}
      onChange={(e)=>setHight(e.target.value)}/>
      
      <span className='hightSpanEl'>cm</span></div>

      
      <div className="w-wrap">
      <span>Weight</span>
      <input 
      className='weight inpt' 
      type="number" 
      placeholder='0'
      value={weight}
      onChange={(e)=>setWeight(e.target.value)}/>
      <span className='weightSpanEl'>kg</span>
      </div>

   </div>

      <div className="result" onClick={calc}>
        <div className="resBmiCalk">
        <h4>Your BMI result...</h4>
        <p className="natija">{bmi>0?bmi:'Pleace click button'}</p>
        </div>
        <p className="natijaTab">{bmi>=18&&bmi<=24.9?'Sizning vazningiz Normal':bmi>=25&&bmi<=29.9?'Siz tolishganroqsiz':bmi>=30?"Sizning vazningiz xavfli darajada":""}</p>
      </div>

    </div>
    
  </header>
  </>
  )
}

export default Header