/* eslint-disable */
import React, { useState } from "react";
import { setSuccessStatus } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
export const Success = (props) => {
  const [hideAddDepartment, setHideAddDepartment] = useState(true);
  const dispatch = useDispatch();
  const success = useSelector(
    (state) => state.allProducts.filterSuccessProducts
  );
  const products = useSelector((state) => state.allProducts);
  const successProStatus = (cat) => {
    const updateList = products.payload?.filter((items) => {
      return items.launch_success === true;
    });
    dispatch(setSuccessStatus(updateList));
  };
  return (
    <>
    <div className="col-d-12" style={{textAlign:'end '}}>
      <button
        className="btn btn-success me-2"
        onClick={() => {
          setHideAddDepartment(!hideAddDepartment);
          successProStatus();
        }}
      >
        Success
      </button>
      </div>
      <div style={{marginTop:'20px'}}>
        {hideAddDepartment
          ? success?.map((items) => {
              return (
                <>
                  <div className="col-md-12">
                    <div className="card" style={{ marginBottom: "20px" }}>
                      <div className="card-body" key={items.flight_number}>
                        <h6 className="card-title">{`RocketName : ${items.rocket.rocket_name}`}</h6>
                        <p className="card-text">{`Mission Name : ${items.mission_name}`}</p>
                        <h5 className="card-text">{`Launch Year : ${items.launch_year}`}</h5>
                        
                          <p className="card-text">{`Details: ${items.details}`}</p>
                        
                        <p>{`Launch Date : ${new Date(
                          items.launch_date_unix
                        ).toLocaleDateString()}`}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
};
