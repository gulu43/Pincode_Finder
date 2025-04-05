import './SearchCSS.css';
import {AllData} from './Search.jsx';
import { useContext, useState } from 'react';

export function MoreInfo() {
    let {pin, api} = useContext(AllData);
    let [filterName, setfilterName] = useState('');
    function helper(e) {
      let inpTemp = e.target.value;

      // checking and making it comparable string
      if (inpTemp != '') {
        inpTemp = inpTemp.slice(0,1).toUpperCase().concat(inpTemp.substring(1).toLowerCase());
        setfilterName(inpTemp);
        console.log('it shuld be capital '+filterName);        
      }
    }
    
  return (
    <div className='outerPart'>
    <div className='dark'>Pincode: {pin}</div>
    <div className='dark message' >Message: {api[0].Message}</div>
    <input type="text" placeholder='Filter' className='filter_inp icon' onChange={helper}/>
    
    {/* because filter only return it does not render it */}
    
    <div className='mainCont '>
      
      {api[0].PostOffice.filter((ele,index)=>(
        // ele == '' || null ? false : <></> ignore
        ele.Name.includes(filterName)
      )).map((ele,index)=>(
        <div className='card' key={index}>
          <div className='txt'>Name:- {ele.Name}</div>
          <div className='txt'>BranchType:- {ele.BranchType}</div>
          <div className='txt'>DeliveryStatus:- {ele.DeliveryStatus}</div>
          <div className='txt'>District:- {ele.District}</div>
          <div className='txt'>Division:- {ele.Division}</div>
        </div>
      ))}
    </div>

    {/* <div className='mainCont '>
      {api[0].PostOffice.map((ele,index)=>(
        <div className='card' key={index}>
          <div className='txt'>Name:- {ele.Name}</div>
          <div className='txt'>BranchType:- {ele.BranchType}</div>
          <div className='txt'>DeliveryStatus:- {ele.DeliveryStatus}</div>
          <div className='txt'>District:- {ele.District}</div>
          <div className='txt'>Division:- {ele.Division}</div>
        </div>
        
      ))}
    </div> */}
    </div>
  );
}

// ele.Name
// ele.BranchType
//       ele.DeliveryStatus
//       ele.District
//       ele.Division