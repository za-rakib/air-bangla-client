import React from 'react';
import './Services.css'

const Services = ({service}) => {
    return ( 
        <div id="service" className="card col-md-4 text-center">
        <img className="card-img-top card-img" src={service.thumbnail} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{service.city}</h5>
          <h2 className="card-title">{service.country} </h2>
          <a href="#" className="btn btn-primary">Booking</a>
        </div>
      </div>

    );
};

export default Services;