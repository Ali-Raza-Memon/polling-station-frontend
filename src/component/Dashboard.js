import React from 'react';

const Dashboard = () => {
    return (
        <>

        <div className="text-center">
            <h3 >Your class has been created a poll</h3>
        </div>

            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://www.ovationmr.com/wp-content/uploads/2021/09/Poll-vs.-Survey.webp" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Poll Title</h5>
                    <p className="card-text">
                        Poll description
                    </p>
                    <a href="#" className="btn btn-primary btn-block">
                        Open Poll
                    </a>
                </div>
            </div>
        </>

    );
};

export default Dashboard;