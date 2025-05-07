import React from 'react';

const Exploring = () => {
    return (
        <>
            <h6 className="mt-5 heading p-5">GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h6>

            <div className="container mt-4">
                <div className="scroll-container">
                    <div className="card-pic">
                        <img src="/images/Buying a home.jpg" className="card-img-top" alt="Buying a home" />
                        <div className="card-body text-center">
                            <br />
                            <p className="card-text">Buying a home</p>
                        </div>
                    </div>
                    <div className="card-pic">
                        <img src="/images/visit a home.jpg" className="card-img-top" alt="Visiting a home" />
                        <div className="card-body text-center">
                            <br />
                            <p className="card-text">Visit a home</p>
                        </div>
                    </div>
                    <div className="card-pic">
                        <img src="/images/investment.jpg" className="card-img-top" alt="Invest in Real Estate" />
                        <div className="card-body text-center">
                            <br />
                            <p className="card-text">Invest in Real Estate</p>
                        </div>
                    </div>
                    <div className="card-pic">
                        <img src="/images/commercial.jpg" className="card-img-top" alt="Explore Insights" />
                        <div className="card-body text-center">
                            <br />
                            <p className="card-text">Buying Commercial Spaces</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exploring;
