import React,{useState,useRef,useEffect} from 'react'

const CountDown = () => {

const [num, setNum] = useState(100);
const [pause, setPause] = useState(false);
let intervalRef = useRef();

const decreaseNum = () => setNum((prev) => prev>0 ? prev - 1 :0);
useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

    return (
        <div>
            <div className="row mt-4">
                <div className="col-4 offset-4 ">
                <input type='number'className="form-control text-center"   
                value={num} onChange={(e)=>setNum(e.target.value)}/>
                    
                </div>
            </div>
          
                <div className="col ">
                  <button className={pause ? "btn btn-success":"btn btn-danger"} 
                  onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
                 
            </div>  
        </div>
    )
}

export default CountDown
