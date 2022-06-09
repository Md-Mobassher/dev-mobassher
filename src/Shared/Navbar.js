
import { Link, NavLink } from 'react-router-dom';


const Navbar = ({children}) => {


    const navItems = <>
        <li><Link to='/'  className='rounded-lg'>Home</Link></li>
        <li><Link activeClass="active" smooth spy to="about" className='rounded-lg'>About</Link></li>
        <li><Link to="/projects" className='rounded-lg'>Projects</Link></li>
        <li><Link  to='https://drive.google.com/file/d/10ddbEN2GdmqRIquzDahxM07-nJ3rU3ox/view?usp=sharing' download className='rounded-lg'>Resume</Link></li>
        <li><NavLink to='/contact' className='rounded-lg'>Contact</NavLink></li>
      
    </>


    return ( 
       <section className='relative '>
         
          <div className="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                <div className="drawer-content flex flex-col">
                 
                    <div className="w-full navbar lg:px-20 bg-base-100 sticky top-0 z-50 ">
                         <Link to='/' className="flex-1 px-2 mx-2 text-2xl font-semibold ">Mobassher</Link>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div> 
                        
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {navItems}
                            </ul>
                        </div>
                    </div>
                    
                    {children}
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100">
                         {navItems}
                    </ul>
                    
                </div>
                </div>
       </section>
    );
};

export default Navbar;