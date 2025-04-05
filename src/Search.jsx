import './SearchCSS.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { MoreInfo } from './MoreInfo';

//for passing data to other comp
export let AllData = createContext();

export function Search() {
    let [pin, setPin] = useState(0);

    //for padding api
    let [api, setApi] = useState([]);

    // condition rendaring
    const [showSecond_, setshowSecond] = useState(false);

    // to hideCompnents
    let [dis, setDis] = useState('display');


    // for faching api
    async function api_caller() {
        let tempStrPin = pin.toString().length
        if (tempStrPin !== 6) {
            console.log(tempStrPin);
            
            console.log(tempStrPin !== 6);
            
            alert('Pincode are of 6 digit eg 363030');
            return false;
        }
        
        let linkdata = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        setApi(await linkdata.json());
        setshowSecond(true);
        setDis('none');
    }

    useEffect(() => {
        console.log(api);
    }, [api])


    return (
        <div className='outerPart'>
            <AllData.Provider value={{ pin, api }} >
                <h3 className='enter' style={{ display: dis }}>Enter Pincode</h3>
                <input type="number"
                    className="input_css"
                    // maxLength={6}
                    placeholder='Pincode'
                    style={{ display: dis }}
                    onChange={(e) => {
                        setPin(e.target.value);
                    }} />
                <button className='btn_css' style={{ display: dis }} onClick={api_caller}>Lookup</button>
                {showSecond_ ? <MoreInfo /> : null}
            </AllData.Provider>
        </div>
    );
}