import React, { useCallback, useEffect, useState } from "react";
import CallsTable from "./components/CallsTable";
import PutsTable from "./components/PutsTable";
import { FaAngleDown, FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
// import StrikeColumn from './StrikeColumn';
import data from "./data.json"; // Your sample data
import "./App.css";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { TbArrowZigZag } from "react-icons/tb";

function App() {
  let call_minOi = 0;
  let call_maxOi = 100;
  call_minOi = Math.min(...data.map((item) => item.calls.oiLakh));
  call_maxOi = Math.max(...data.map((item) => item.calls.oiLakh));
  useEffect(() => {}, []);

  const put_minOi = Math.min(...data.map((item) => item.puts.oiLakh));
  const put_maxOi = Math.max(...data.map((item) => item.puts.oiLakh));
  const [sortedData, setSortedData] = useState(
    data.sort((a, b) => a.strike - b.strike)
  );
  const [isAscending, setIsAscending] = useState(true);
  useEffect(() => {
    console.log(sortedData);
  }, [sortedData]);

  useEffect(() => {
    let prev = [...sortedData];
    if (isAscending) {
      prev.sort((a, b) => b.strike - a.strike);
    } else {
      prev.sort((a, b) => a.strike - b.strike);
    }
    setSortedData(prev);
  }, [isAscending]);
  //   const handledata=useCallback(()=>{
  //     console.log('handle callback called')
  //      return sortedData.map((item,idx)=>(
  //     <tr
  //     key={idx}
  //     className="flex hover:bg-yellow-100 text-black font-medium  flex-row justify-between w-full h-fit bg-white  ring-[1px] ring-slate-200"
  //   >

  //     <td className="tdata">
  //      { item.calls.gamma}
  //     </td>
  //     <td className="tdata">
  //       {item.calls.vega}
  //     </td>
  //     <td className="tdata">
  //     {item.calls.theta}

  //     </td>
  //     <td className="tdata">
  //     {item.calls.delta}

  //     </td>
  //     <td className="tdata ring-0">
  //       {item.calls.oiLakh}

  //     </td>
  //     <td className="tdata justify-end ring-0 ">
  //       {(function(){
  //        let val=(item.calls.oiLakh)
  //        console.log(call_minOi,call_maxOi,val)
  //        let progress=Math.fround(((val-call_minOi)/(call_maxOi-call_minOi))*100);
  //        console.log(progress);
  //        return(<div className={`bg-red-200 ml-2    flex h-[10px] rounded-l-full`} style={{width:`${progress}%`}} ></div>)
  //       })()}
  //     </td>
  //     <td className="tdata ">
  //       {/* <ProgressBar min={minOi} max={maxOi} value={calls.callOi} /> */}
  //       {item.calls.ltp}

  //     </td>
  //     <td className="tdata px-2 py-1 ">
  //       {/* {item.strike} */}
  //       <span className='flex bg-slate-200 rounded-sm w-full h-full gap-2 justify-center'>{item.strike}</span>
  //     </td>
  //     <td className="tdata">
  //       {item.puts.ltp}
  //     </td>
  //     <td className="tdata justify-start ring-0">
  //       {(function(){
  //        let val=(item.puts.oiLakh)
  //        // console.log(call_minOi,call_maxOi,val)
  //        let progress=Math.fround(((val-put_minOi)/(put_maxOi-put_minOi))*100);
  //        console.log(progress);
  //        return(<div className={`bg-green-200 ml-2    flex h-[10px] rounded-r-full`} style={{width:`${progress}%`}} ></div>)
  //       })()}
  //     </td>
  //     <td className="tdata ring-0">
  //       {item.puts.oiLakh}
  //     </td>
  //     <td className="tdata">
  //       {item.puts.delta}
  //     </td>
  //     <td className="tdata">
  //      {item.puts.theta}
  //     </td>
  //     <td className="tdata ">
  //       {/* <ProgressBar min={minOi} max={maxOi} value={calls.callOi} /> */}
  //       {item.puts.vega}
  //     </td>
  //     <td className="tdata">
  //       {item.puts.gamma}
  //     </td>
  //   </tr>
  // ))} ,[sortedData])

  return (
    <div className="flex flex-col items-center justify-center w-screen  h-fit text-black bg-slate-50">
      {/* top bar */}
      <div className="flex w-[80%] h-fit flex-row justify-start items-center bg-white  min-h-[10px] mb-[50px]">
        <div className="flex flex-row ring-1 ring-gray-300 gap-2 px-4 py-[7px] text-[16px]">
          <div className="flex  ">
            NIFTY 25790.95{" "}
            <span className="flex text-green-300 px-2 text-[14px] my-auto">
              +1.5%
            </span>
          </div>
          <span className="flex py-1 px-2 ring-1 ring-blue-300 rounded-sm">
            <TbArrowZigZag className="flex text-blue-300 rotate-12 " />
          </span>
          <span className="flex py-1 px-2 ring-1 ring-blue-300 rounded-sm text-blue-300 text-[12px]">
            Info
          </span>
        </div>
        <div className="flex flex-row px-4 py-2 gap-2 ring-1 h-full text-[16px] ring-gray-300  justify-between ">
          {/* expiry */}
          <div className="flex">Expiry</div>
          {/* sep 26 down arrow */}
          <div className="flex items-center justify-center font-bold text-gray-600 gap-2">
            sep 26 <FaAngleDown />
          </div>
        </div>
        <div className="flex flex-row ring-1 ring-gray-300 gap-2 px-4 py-2 text-[16px] ">
          {/* ATM IV 10.1 -1.0 */}
          ATM IV 10.1 <span className="text-red-300 flex m-auto">-1.0</span>
        </div>
        <div className="flex flex-row ring-1 ring-gray-300 gap-2 px-6 py-2 text-[16px]">
          {/* IVP 14 */}
          IVP 14
        </div>
        <div className="flex flex-row ring-1 ring-gray-300 gap-2 px-4 py-2 text-[16px]">
          {/* toggle switch */}
          {/* per lot */}
          per lot
        </div>
        <div className="flex flex-row items-end text-blue-500 font-semibold ring-1 ring-gray-300 gap-2 px-4 py-2 text-[14px]">
          {/* demo button */}
          {/* demo */}
          <CiPlay1 className="flex m-1 ring-2  ring-blue-400 text-blue-500 font-bold rounded-sm px-1" />
          Demo
        </div>
      </div>
      <table className="flex w-full flex-col ">
        <thead className="flex w-full h-fit flex-col items-center justify-start">
          <tr className="flex text-[16px] w-full font-bold uppercase flex-row  ">
            <th className="flex w-full ring-[1px] ring-slate-100 bg-red-100 text-red-300  justify-end px-2">
              calls
            </th>
            <th className="flex min-w-[100px] bg-white "></th>
            <th className="flex w-full ring-[1px] ring-slate-100 bg-green-100  text-green-300 justify-start px-2">
              Puts
            </th>
          </tr>
          <tr className="flex flex-row text-[12px] text-gray-400 justify-between w-full ">
            <th className="thead">
              Gamma{" "}
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th className="thead">
              Vega
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th className="thead">
              Theta
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th className="thead">
              Delta
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th className="thead">OI-Lakh</th>
            <th className="thead">
              Call OI{" "}
              <span className="flex p-1 m-auto h-fit w-[30%] bg-red-300 rounded-md"></span>
            </th>
            <th className="thead">
              LTP
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th
              onClick={() => {
                setIsAscending(!isAscending);
              }}
              className="thead items-center justify-center gap-2 hover:cursor-pointer"
            >
              Strike {isAscending ? <FaArrowDown /> : <FaArrowUp />}
            </th>
            <th className="thead">
              LTP
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th className="thead">
              Put OI{" "}
              <span className="flex p-1 m-auto h-fit w-[30%] bg-green-300 rounded-md"></span>
            </th>
            <th className="thead">OI-Lakh</th>
            <th className="thead">
              Delta
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th className="thead">
              Theta
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th className="thead">
              Vega
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
            <th className="thead">
              Gamma
              <AiTwotoneQuestionCircle className="flex m-1 items-center justify-center" />
            </th>
          </tr>
        </thead>
        <tbody className="flex flex-col w-full h-fit pt-2  items-center justify-start">
          {sortedData.map((item, idx) => (
            <tr
              key={idx}
              className="flex hover:bg-yellow-100 text-black font-medium  flex-row justify-between w-full h-fit bg-white  ring-[1px] ring-slate-200"
            >
              <td className="tdata">{item.calls.gamma}</td>
              <td className="tdata">{item.calls.vega}</td>
              <td className="tdata">{item.calls.theta}</td>
              <td className="tdata">{item.calls.delta}</td>
              <td className="tdata ring-0">{item.calls.oiLakh}</td>
              <td className="tdata justify-end ring-0 ">
                {(function () {
                  let val = item.calls.oiLakh;
                  console.log(call_minOi, call_maxOi, val);
                  let progress = Math.fround(
                    ((val - call_minOi) / (call_maxOi - call_minOi)) * 100
                  );
                  console.log(progress);
                  return (
                    <div
                      className={`bg-red-200 ml-2    flex h-[10px] rounded-l-full`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  );
                })()}
              </td>
              <td className="tdata ">
                {/* <ProgressBar min={minOi} max={maxOi} value={calls.callOi} /> */}
                {item.calls.ltp}
              </td>
              <td className="tdata px-2 py-1 ">
                {/* {item.strike} */}
                <span className="flex bg-slate-200 rounded-sm w-full h-full gap-2 justify-center">
                  {item.strike}
                </span>
              </td>
              <td className="tdata">{item.puts.ltp}</td>
              <td className="tdata justify-start ring-0">
                {(function () {
                  let val = item.puts.oiLakh;
                  // console.log(call_minOi,call_maxOi,val)
                  let progress = Math.fround(
                    ((val - put_minOi) / (put_maxOi - put_minOi)) * 100
                  );
                  console.log(progress);
                  return (
                    <div
                      className={`bg-green-200 ml-2    flex h-[10px] rounded-r-full`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  );
                })()}
              </td>
              <td className="tdata ring-0">{item.puts.oiLakh}</td>
              <td className="tdata">{item.puts.delta}</td>
              <td className="tdata">{item.puts.theta}</td>
              <td className="tdata ">
                {/* <ProgressBar min={minOi} max={maxOi} value={calls.callOi} /> */}
                {item.puts.vega}
              </td>
              <td className="tdata">{item.puts.gamma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
