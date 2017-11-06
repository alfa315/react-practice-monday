import React from 'react'

const ShowProfile = (props) => {
  return <div>
    <h3>{props.showInfo.name}</h3>
    <img src={props.showImg} alt=''/>
    <ul>
      <li>Show Status: {props.showInfo.status ? props.showInfo.status : 'Cancelled forever...'}</li>
      <li>Network Name: {props.networkInfo.name ? props.networkInfo.name : 'TV WORLD'}</li>
      <li>Show Rating: {props.showRtg.average ? props.showRtg.average : '-1,000,000' }</li>
    </ul>
  </div>
}

export default ShowProfile
