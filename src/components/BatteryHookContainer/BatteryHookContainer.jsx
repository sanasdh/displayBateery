import React, { useState, useEffect } from 'react';
import Battery from '../Battery/Battery'
import { register, unregister } from '../../utils/battery';


function BatteryHookContainer(props) {
  // useState always returns an array of two elements
  // const arr = useState(.55);
  // First element is the value of the state, these are just names
  // Second element is a setter function for updating the state, by convention use what evername for arr[0] and setName for arr[1]
  // const [level, setLevel] = useState(.55)
  // console.log(level);
  // console.log(setLevel);

  const [batteryData, setBatteryData] = useState({
    level: .55,
    charging: true
  });
  function updateBattery(battery) {
    console.log(battery);
    setBatteryData(battery)
  }


  useEffect(() => {
    register(updateBattery);
    return () => {
      unregister(updateBattery);
    }
  }, []);
  return (
    <>
      <Battery level={batteryData.level} charging={batteryData.charging} />
      {/* <button onClick={() =>
        setBatteryData({ level: batteryData.level + .01, charging: batteryData.charging })}> update level </button> */}
    </>
  )
}

export default BatteryHookContainer;