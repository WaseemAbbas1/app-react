import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [stutus, setStutus] = useState("active");
  const[gender , setGender]= useState('male')
  useEffect(() => {
    console.log(stutus);
    console.log(gender);
  }, [stutus,gender]);
const handleChange= e=>{
setGender(e.target.value)
}
  return (
    <>
      <div className="container py-4">
        <div className="row text-center">
          <div className="col mb-4">
            <h1>Use Effect Hook</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 col-md-6 mb-3">
            <select
              className="form-control"
              onChange={(e) => setStutus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">inactive</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
            </select>
          </div>
          <div className="col-12 col-md-6  ">
            <p className="d-inline-block me-3 fw-bold">Gender:</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleChange}
                checked= {gender ==='male'}
              />
              <label className="form-check-label" htmlFor="mala">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="female"
                id="female"
                value="female"
                onChange={handleChange}
                checked={gender==='female'}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
