import React from 'react';

const AddDestination = () => {
    return (
        <div className="row">
        <div className="col-md-3">
            {/* <Sidebar /> */}
        </div>
        <div className="col-md-9">
            <div className="row">
                <div className="col-md-6">
                    <h4 style={{}} className="text-center">Add Destination</h4>
                </div>
                <div className="col-md-6 ">
                    <h4 style={{}} className="text-warning m-4">{ }</h4>
                </div>
            </div>
            <form  action="" method="POST" style={{ width: '75%', margin: '0 auto' }} className="bg-light m-5 p-5">
                <input  type="name" name="name" className="form-control" placeholder="title" required />
                <br />
                <textarea  name="description" className="form-control" placeholder="description" required ></textarea>
                <br />
                <input  type="file" placeholder="Images" />
                <input type="submit" value="Submit" className="btn btn-warning" />
            </form>
        </div>
    </div>
    );
};

export default AddDestination;