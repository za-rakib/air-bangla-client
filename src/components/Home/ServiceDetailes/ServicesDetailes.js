import React from 'react';
import uk from '../../../images/uk.jpg'
import nepal from '../../../images/nepal.jpg'
import ctg from '../../../images/ctg.jpg'
import dubai from '../../../images/dubai.jpg'
import Services from './../Services/Services'

const serviceData = [{
    "id": 1,
    "city": " United Kingdom",
    "country": "London",
    "economy": "84.95",
    "business": "104.39",
    "thumbnail": "https://c.ekstatic.net/shared/images/destination/v1/airports/LON/810x270.jpg",
    "image": "https://c.ekstatic.net/shared/images/destination/v1/airports/LON/1360x454.jpg"
  }, {
    "id": 2,
    "city": "United Arab Emirates",
    "country": "Dubai",
    "economy": "92.28",
    "business": "132.83",
    "thumbnail": "https://c.ekstatic.net/shared/images/destination/v1/airports/DXB/810x270.jpg",
    "image": "https://c.ekstatic.net/shared/images/destination/v1/airports/DXB/1360x454.jpg"
  }, {
    "id": 3,
    "city": "Auckland",
    "country": "New Zealand",
    "economy": "955.94",
    "business": "1245.35",
    "thumbnail": "https://c.ekstatic.net/shared/images/destination/v1/airports/AKL/810x270.jpg",
    "image": "https://c.ekstatic.net/shared/images/destination/v1/airports/AKL/1360x454.jpg"
  }]

const ServicesDetails = () => {
    return (
       <div className="container-fluid">
           <h2 className="text-center m-4">Featured destinations from Bangladesh</h2>
            <div className='row d-flex justify-content-center card-cen'>
            {
             serviceData.map((service =><Services service={service} key={service.name}/>))
            }
        </div>
       </div>
    );
};

export default ServicesDetails;