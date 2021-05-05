import React, { useState } from 'react';
import './App.less';


const CheckBoil = ({ celsius }) => {
  return (
    (celsius >= 100) ?
    (<p>The water would boil.</p>)
    :
    (<p>The water would not boil.</p>)
  )
}

const InputCelsius = ({onCelsiusChange, value}) => {
  // const [celsius, setcelsius] = useState();
  const storeCelsius = (e) => {
    // setcelsius(e.target.value);
    onCelsiusChange(e.target.value);
  }

  return (
    <div>
      {(value === "false") ?
      (<input type="text" onChange={storeCelsius}/>)
      :
      (<input type="text" onChange={storeCelsius} value={value}/>)}
      <label>celsius</label>
    </div>
  )
}

const InputFahrenheit = ({onFahrenheitChange, value}) => {
  // const [fahrenheit, setfahrenheit] = useState();
  const storeFahrenheit = (e) => {
    // setfahrenheit(e.target.value);
    onFahrenheitChange(e.target.value);
  }

  return (
    <div>
      {(value === "false") ?
      (<input type="text" onChange={storeFahrenheit}/>)
      :
      (<input type="text" onChange={storeFahrenheit} value={value}/>)}
      <label>fahrenheit</label>
    </div>
  )
}

const SetAnotherInputValue = () => {

  const [temperature, settemperature] = useState([]);
  // temperature 是数组类型，长度为 3
  // 下标为 0 : 取值有两个，0 表示当前进行 set 操作存储的是新的摄氏度，1 表示华氏度
  // 下标为 1 : 存储摄氏度的数值
  // 下标为 2 : 存储华氏度的数值

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  const storeTemperatureC = (celsius) => {
    const temp = [0, celsius, toFahrenheit(celsius)];
    settemperature(temp);
  }

  const storeTemperatureF = (fahrenheit) => {
    const temp = [1, toCelsius(fahrenheit), fahrenheit];
    settemperature(temp);
  }

  // valueC 表示设定的输入摄氏度的输入框的值，为 "false" 表示不进行设定
  const  valueC = (temperature[0] === 1) ? temperature[1] : "false";
  // valueF 表示设定的输入华氏度的输入框的值，为 "false" 表示不进行设定
  const  valueF = (temperature[0] === 0) ? temperature[2] : "false";

  return (
    <div>
      <InputCelsius 
        onCelsiusChange={storeTemperatureC} 
        value={valueC}
      />
      <InputFahrenheit 
        onFahrenheitChange={storeTemperatureF} 
        value={valueF}
      />
      <CheckBoil celsius={temperature[1]}/>
    </div>
  )
}


const App = () => {

  return (
    <div>
      <p>input the temperature either celsius or fahrenheit</p>
      <SetAnotherInputValue />
    </div>
  )
}

export default App;