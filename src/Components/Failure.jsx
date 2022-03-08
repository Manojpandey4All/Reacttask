/* eslint-disable */
import React from 'react'

export const  Failure = (props) => {
  return (
    <>
    <div className='row'>
        {props?.check?.map((items)=>{
            return(
                <>
                    <div className="col-lg-8" >
                                                <div className="card" style={{ marginBottom: "20px" }}>
                                                    <div className="card-body" key={items.flight_number} >
                                                        <h3 className="card-title">{`RocketName : ${items.rocket.rocket_name}`}</h3>
                                                        <p className="card-text">{`Mission Name : ${items.mission_name}`}</p>
                                                        <h4 className="card-text">{`Launch Year : ${items.launch_year}`}</h4>
                                                        <h4 className="card-text"><p>{`Details: ${items.details}`}</p></h4>
                                                        <p>{`Launch Date : ${new Date(items.launch_date_unix).toLocaleDateString()}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                </>
            )
        })}
</div>
        </>
  )
}
