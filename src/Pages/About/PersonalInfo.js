import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    return (
        <section className='lg:max-w-2/3 mt-14' >
                     <h2 className='text-4xl font-bold  text-center lg:mb-12'>Personal <span className='text-primary'>Informations</span></h2>
                     <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 justify-center items-center'>
                         <div className=' justify-start mr-10'>
                            <p className='mb-3 font-semibold '>Name: <span className='text-primary'>Md Mobassher Hossain</span></p>
                            <p className='mb-3 font-semibold '>Address: <span className='text-primary'>Rajarhat, Kurigram, Bangladesh</span></p>
                            <p className='mb-3 font-semibold '>Nationality: <span className='text-primary'>Bangladeshi</span></p>
                            <p className='mb-3 font-semibold '>Age: <span className='text-primary'>25</span></p>
                            <p className='mb-3 font-semibold '>Language: <span className='text-primary'>Bengali (Native), English</span></p>
                         </div>

                         <div className='justify-start'>

                            <p className='mb-3 font-semibold '>Phone:  <a as={Link}   href='tell:+8801773381807' className=' text-primary ml-2 '>+88-01773381807</a></p>

                            <p className='mb-3 font-semibold '>Email:  <a as={Link} target='_black'  href='mailto:mdmobassherhossain1@gmail.com' className=' text-primary ml-2 '>mdmobassherhossain1@gmail.com</a></p>

                            <p className='mb-3 font-semibold '>Github:  <a as={Link} target='_black' href='https://github.com/Md-Mobassher' className=' text-primary ml-2 '>https://github.com/Md-Mobassher </a></p>

                            <p className='mb-3 font-semibold '>Linkedin:  <a as={Link} target='_black' href='https://www.linkedin.com/in/md-mobassher' className=' text-primary ml-2 '>https://www.linkedin.com/in/md-mobassher </a></p>

                            <p className='mb-3 font-semibold '>Facebook:  <a as={Link} target='_black' href='https://www.facebook.com/mdmobassherf' className=' text-primary ml-2 '>https://www.facebook.com/mdmobassherf </a></p>

                         </div>
                       
                     </div>
                </section>
    );
};

export default PersonalInfo;