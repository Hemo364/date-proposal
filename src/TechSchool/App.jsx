import { Route, Routes , Link, NavLink , useLocation} from "react-router";
import Welcome from './Welcome';
import Courses from './Courses';
import ContactUs from './ContactUs';
import LoginModal from './LoginModal';
const App = () => {

    const location = useLocation();
    const isLoginRoute = location.pathname==="/Login";
        
    return (
        <div className='bg-[#252525] w-full h-screen z-50'>
            <nav className='z-50 fixed flex bg-[#252525] items-center w-full h-[70px]  border-b-3 border-yellow-400'>
                <h2 className='text-white text-3xl pl-4 font-bold '>TechSchool</h2>
                <NavLink to="/Login"  className={({isActive})=>`border  absolute  border-yellow-400 cursor-pointer ml-[1335px] rounded-sm px-4  p-2 text-white text-lg ${isActive?`bg-yellow-400` : "bg-[#252525]"}`}>Login</NavLink>
                <NavLink to="/Home"  className={({isActive})=>`border absolute border-yellow-400  rounded-sm cursor-pointer p-2 px-4 text-white ml-[1420px] text-lg ${isActive? 'bg-yellow-400 m-2' : 'bg-[#252525]'}`
                }>Home</NavLink>
                
            </nav>
            
            {isLoginRoute && <LoginModal  />}
            <Welcome/>
            <Courses/>
            <ContactUs/>
            
            <footer className='bg-[#252525] border-t-3 border-yellow-400'>
                <h2 className='py-4 text-center text-xl text-white'>this is a simple footer !</h2>
            </footer>
            
        </div>
    );
};

export default App;