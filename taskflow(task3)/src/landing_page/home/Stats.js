import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row '>
                <div className='col-6 p-3'>
                    <h1 className='fs-2 mb-5'>What Our Users Are Saying</h1>

                    <p className='text-muted fs-6'>"TaskFlow changed the way my team works. Projects are finally organized!" - Sarah M., Project Manager<br></br><br></br><br></br>"So clean, so modern. It's the only task app I've actually stuck with." - David L., Freelancer</p>
                </div>

                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width: "90%"}}/>

                </div>

            </div>            
        </div>
    );
}

export default Stats;