import React, { useState, useEffect } from 'react';
import { NAV_LIST } from '../utils/helper';
import { BLACK_ARROW } from '../utils/icons';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    const navigate = useNavigate
    const toggleNavigate = (link) => {
        navigate(link)
    }
    const closeTab = () => { setOpen(false) }
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    
    return (
        
        <div>
            <header>
                <nav className="flex items-center justify-between pt-5">
                    <a href="/">
                        <img
                            src='/assets/images/webp/bill-center-logo.webp'
                            alt="Bill Center Logo"
                            className="w-full max-w-[105px]"
                        />
                    </a>
                    <div className={` z-40 flex gap-10 max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:bg-ball-blue max-lg:transition-all max-lg:duration-300 ${open ? 'bg-darkGreen max-lg:left-0' : 'left-full'}`}>
                        {NAV_LIST.map((obj, i) => (
                            <a onClick={() => toggleNavigate(obj.id)} href={obj.id} className="text-white text-base font-normal font-helvetica relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5 after:left-0" key={i}>{obj.name}
                            </a>
                        ))}
                        <button className="font-helvetica flex items-center gap-3 px-[22px] py-2 transition-all ease-linear duration-200 hover:bg-darkGreen hover:text-white hover-border-darkGreen bg-white text-black rounded-e-full border border-solid rounded-b-full lg:hidden">
                            Get Started <BLACK_ARROW />
                        </button>
                    </div>
                    <button className="font-helvetica hover:border-darkGreen transition-all ease-linear duration-200 hover:bg-darkGreen hover:text-white flex items-center gap-3 px-[22px] py-[14px] bg-white text-black rounded-e-full border border-solid rounded-b-full max-lg:hidden">
                        Get Started <BLACK_ARROW />
                    </button>
                    <button
                        onClick={handleOpen}
                        className={`hidden size-6 justify-center relative z-50 max-lg:flex flex-col overflow-hidden`}
                    >
                        <span
                            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
                        ></span>
                        <span
                            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}
                        ></span>
                        <span
                            className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10' : ''}`}
                        ></span>
                    </button>
                </nav>
            </header>
        </div>
    );
};




export default Header;
