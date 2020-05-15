import React, { Component } from "react";

class NavInfo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="container-info">
          <div className="block-info">
            <div className="block-contact">
                <div className="info d-flex">
                  <div className="icon-info">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="text-info">
                    <h3>000 (123) 456 7890</h3>
                    <p>
                      A small river named Duden flows by their place and supplies.
                    </p>
                  </div>
                </div>
                <div className="info d-flex">
                  <div className="icon-info">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="text-info">
                    <h3>198 West 21th Street</h3>
                    <p>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </p>
                  </div>
                </div>
                <div className="info d-flex">
                  <div className="icon-info pr-2">
                    <i className="far fa-clock"></i>
                  </div>
                  <div className="text-info">
                    <h3>Open Monday-Friday</h3>
                    <p>8:00am - 9:00pm</p>
                  </div>
                </div>
            </div>
            
            
          </div>
          <div className="book">
            <h3>Book a Table</h3>
            <form action="#" className="main-form">
              <div className="d-flex">
                <div className="form-group pr-1 pl-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group pr-1 pl-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group pr-1 pl-1">
                  <div className="input-wrap">
                    <div className="icon">
                      <span className="ion-md-calendar"></span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div className="form-group pr-1 pl-1 ">
                  <div className="input-wrap">
                    <div className="icon">
                      <span className="ion-ios-clock"></span>
                    </div>
                    <input
                      type="text"
                      className="form-control appointment_time"
                      placeholder="Time"
                    />
                  </div>
                </div>
                <div className="form-group pr-1 pl-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group pr-1 pl-1">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group  pr-1 pl-1">
                  <button
                    type="submit"
                    value=""
                    className="btn bg-white py-3 px-4"
                  >
                    Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default NavInfo;
