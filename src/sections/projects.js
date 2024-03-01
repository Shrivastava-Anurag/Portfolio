import React from 'react';
import Divider from '../components/divider';
 
function Project() {
    return(
        <>
        <div className='mx-40 my-20'>
        <div className='flex justify-center'>
        <h1 className='text-amber-50 text-9xl montserrat-title leading-tight'> PROJECTS </h1>
        </div>
        <div className='flex flex-col my-10'>
            <div className='flex justify-center'>
                <div className='size-7/12'>
                    <img className='' src={require('../assets/weconnect.jpeg')}></img>
                </div>
            </div>
            <div className='px-64'>
            <Divider />
            </div>

            <div className='flex justify-center'>
                <div className='size-7/12'>
                    <img className='' src={require('../assets/E-commerce.jpeg')}></img>
                </div>
            </div>
            <div className='px-64'>
            <Divider />
            </div>

            <div className='flex justify-center'>
                <div className='size-7/12'>
                    <img className='' src={require('../assets/FoodDelivery.jpeg')}></img>
                </div>
            </div>

        </div>
        </div>
        </>
    )
}

export default Project;