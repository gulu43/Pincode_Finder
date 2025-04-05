import './SearchCSS.css';
import { AllData } from './Search.jsx';
import { useContext, useState, useEffect } from 'react';

export function MoreInfo() {
  let { pin, api } = useContext(AllData);
  let [filterName, setfilterName] = useState('');

  function helper(e) {
    let inpTemp = e.target.value;

    // checking and making it comparable string
    if (inpTemp != '') {
      inpTemp = inpTemp.slice(0, 1).toUpperCase().concat(inpTemp.substring(1).toLowerCase());
      // console.log('it shuld be capital ' + filterName);
    }

    setfilterName(inpTemp);
  }
  useEffect(() => {
    console.log('Updated filterName:', filterName);
  }, [filterName]);

  return (
    <div className='outerPart'>
      <div className='dark'>Pincode: {pin}</div>
      <div className='dark message' >Message: {api[0].Message}</div>
      <input type="text" placeholder='Filter' className='filter_inp icon' onChange={helper} />

      {/* because filter only return it does not render it */}

      {filterName === '' ? (
        <div className='mainCont '>
          {
            !api[0].PostOffice || api[0].PostOffice[0] == null ? (
              <h1>Pincode is Not Valid</h1>
            ) : (
              api[0].PostOffice.map((ele, index) => (
                <div className='card' key={index}>
                  <div className='txt'>Name:- {ele.Name}</div>
                  <div className='txt'>BranchType:- {ele.BranchType}</div>
                  <div className='txt'>DeliveryStatus:- {ele.DeliveryStatus}</div>
                  <div className='txt'>District:- {ele.District}</div>
                  <div className='txt'>Division:- {ele.Division}</div>
                </div>
              ))
            )
          }
        </div>
      ) : (
        <h2>Filtered results are showing</h2>
      )}


      {/* if the filter gets empty it does not shows  data */}
      {filterName !== '' && (
        <div className='mainCont '>
          {api[0].PostOffice.filter((ele, index) => (
            ele.Name.includes(filterName)
          )).map((ele, index) => (
            <div className='card' key={index}>
              <div className='txt'>Name:- {ele.Name}</div>
              <div className='txt'>BranchType:- {ele.BranchType}</div>
              <div className='txt'>DeliveryStatus:- {ele.DeliveryStatus}</div>
              <div className='txt'>District:- {ele.District}</div>
              <div className='txt'>Division:- {ele.Division}</div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
