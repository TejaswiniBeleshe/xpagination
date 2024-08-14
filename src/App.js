import { useEffect, useState } from 'react';
import './App.css';
import EachRow from './EachRow';

function App() {
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);
  // const [dir,setDir] = useState('')
  let dataEachPage = 10;
  let sIdx =Math.abs((page-1)*10);
  let eIdx = Math.abs(sIdx+10);
  console.log(sIdx,eIdx)
  let totalPage = Math.ceil(data.length/dataEachPage);
  let items = data.slice(sIdx,eIdx,totalPage);
  console.log(data,items);
 

  console.log("dataa",page)
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        let res = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
      let resData = await res.json();
      setData(resData);

      }catch(err){
        alert('failed to fetch data');
      }
      
    }
    fetchData()
  },[])

  const dir = (direction)=>{
    if(direction==="next" && page < totalPage){
      setPage(prev=>prev+1)
    }
    if(direction==="prev" && page >1){
        setPage(prev=>prev-1)
    }
  }


   


  return (
    <div className="App">
       <h1>Employee Data Table</h1>
      {items.length?
       <table>
         <thead>
           <tr>
               <th >ID</th>
               <th>Name</th>
               <th>Email</th>
               <th>Role</th>
           </tr>
           </thead>
           <tbody>
           {
            items.map((ele)=>{
              return <EachRow ele={ele}/>
            })

           }
           </tbody>

       </table>:""}
       <div className='btn'>
          <button onClick={()=>dir("prev")}>Previous</button><span style={{backgroundColor:"#357835c7",padding:".5rem",color:"#FFFFFF"}}>{page}</span><button onClick={()=>dir("next")}>Next</button>
      </div>
    </div>
  );
}

export default App;
