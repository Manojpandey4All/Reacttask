import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import { Success } from "./Success";
import { Failure } from "./Failure";
export const Products = () => {
  // const [data,setData] = useState([])
  const [search, setSearchItems] = useState("");
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const getProducts = () => {
    setLoading(true);
    const promise = axios.get("https://api.spacexdata.com/v3/launches");
    promise
      .then((res) => {
        // console.log({ res })
        setLoading(false);
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  const upcomingFlight = () => {
    const updateList = products.filter((items) => {
      return items.upcoming === false;
    });
    dispatch(setProducts(updateList));
  };
  const lastYear = () => {
    const last = new Date().getFullYear() - 1;
    const updateList = products.payload.filter((items) => {
      return items.launch_year === last.toString();
    });
    if (updateList && updateList.length === 0) {
      alert("no record");
    } else {
      console.log("last year ", updateList);
      dispatch(setProducts(updateList));
    }
  };

  const lastWeek = () => {
    const updateList = products.payload.filter((items) => {
      return (
        new Date(items.launch_date_utc).toLocaleDateString() ===
        new Date().toLocaleDateString()
      );
    });
    console.log(updateList);
    if (updateList && updateList.length === 0) {
      alert("no record");
    } else {
      console.log("last year ", updateList);
      dispatch(setProducts(updateList));
    }
  };

  return (
    <>
      <div className="hero ">
        <div className="container">
          <div className="row">
             <div className="buttons col-md-2">
            <button className="btn btn-primary me-2" onClick={upcomingFlight} style={{margin:'10px'}}>
              Upcoming
            </button>
            <button className="btn btn-secondary me-2" onClick={lastYear} style={{margin:'10px'}}>
              Last Year
            </button>
            <button className="btn btn-secondary me-2" onClick={lastWeek} style={{margin:'10px'}}>
              Last Week
            </button>
          </div>
            <div className="col col-md-10" style={{marginTop:'20px'}}>

            <input   type="search" className="form-control"  placeholder="Search by Rocket Name" 
            onChange={(e) => setSearchItems(e.target.value)}/>

          {/* Components */}
          <div className="row">
            <div className="col col-md-6" style={{marginTop:'10px'}}>
              <Failure />
            </div>

            <div className="col col-md-6" style={{marginTop:'10px'}}>
              <Success />
            
          </div>
          </div>
            
{/* close here */}
<div className="row  justify-content-center">
            {/* <Failure check={fail}/> */}
            {loading ? (
              <Spinner animation="border" role="status">
                
              </Spinner>
            ) : (
              products.payload
                ?.filter((value) => {
                  if (search === "") {
                    return value;
                  } else if (
                    value.rocket.rocket_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                })
                ?.map((items) => {
                  return (
                    <>
                      <div className="col-md-11">
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
            )}
          </div>
            </div>

            

          </div>
         

          
          
         
        
        </div>
      </div>
    </>
  );
};
