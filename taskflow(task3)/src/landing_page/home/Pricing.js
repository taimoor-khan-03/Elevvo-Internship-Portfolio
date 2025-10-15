import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>

            <div className='row'>

                <div className='col-4'>
                    <h1 className='fs-2 mb-5'>Flexible Plans for Every Team</h1>

                    <a href='' style={{textDecoration: "none"}}>See pricing &nbsp; &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>

                <div className='col-2'></div>

                <div className='col-6'>
                    <div className='row text-center'>

                        <div className='col p-4 border'>
                            <h1 className='fs-2' ><i class="fa fa-usd" aria-hidden="true"></i>0</h1>
                            <p>Free <br></br>  (Free Forever, Basic Features)</p>
                        </div>

                        <div className='col p-4 border'>
                            <h1 className='mt-3 fs-2'><i class="fa fa-usd" aria-hidden="true"></i>20</h1>
                            <p>PRO <br></br>(Advanced features, unlimited projects)</p>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Pricing;