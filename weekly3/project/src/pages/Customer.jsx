import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../store/features/customerSlice";

const Customer = () => {
  const dispatch = useDispatch();
  const customerList = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);
  return (
    <>
      <div className="customer py-5 d-flex align-items-center">
        <div className="container">
          <h1 className="text-center">Our Customer</h1>
          <div className="d-flex py-5 flex-wrap gap-5 justify-content-center">
            {customerList.map((data) => {
              return (
                <figure key={data.id} className="d-flex flex-column">
                  <img src={`${data.avatar}`} alt="" className="rounded" width={350} height={450} />
                  <p className="fs-5 text-center">{data.nama}</p>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
