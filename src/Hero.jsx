import Bar from "./Bar";
import DropDown from "./DropDrown";

const Hero = () => {
    const Dropdown = [
        { name: 'Todo List', icon: '/images/icon-todo.svg' },
        { name : 'Calender', icon: '/images/icon-calendar.svg'},
        { name: 'Reminder', icon: '/images/icon-reminders.svg'},
        { name: 'Planning', icon: '/images/icon-planning.svg'},
    ]

    const DropdownTwo = [
        {name: 'History'},
        {name: 'Our Team'},
        {name: 'Blog'},
    ];

    const barToggle = () => {
        let menuButton = document.getElementById("menuButton");
        menuButton.classList.add("rotate-90");
        let bar = document.getElementById('bar');
        bar.classList.remove('hidden');
        // let opacity = document.getElementById("opacity");
        // opacity.classList.add("opacity-10");
    }

    const toggleNavOne = () => {
        let NavOne = document.getElementById("NavOne");
        NavOne.classList.toggle("hidden");
    }

    const toggleNavTwo = () => {
        let NavTwo = document.getElementById("NavTwo");
        NavTwo.classList.toggle("hidden");
    }

    return(
        <div className=" text-almost-black font-Epilogue text-main flex flex-col justify-center items-center relative">
            {/* large screens */}
            <nav className=" md:px-52 hidden md:flex justify-between items-center md:w-screen my-6 px-6 text-sm text-medium-gray">
                <div className="flex justify-evenly items-center space-x-8">
                    <img src="/images/logo.svg" alt="Logo" className=" w-20" />
                    <div onClick={toggleNavOne} className=" flex flex-col items-center">
                        <div className="hover:text-almost-black transition flex justify-center items-center">
                            Features 
                            <img src="/images/icon-arrow-down.svg" alt="Features" className="ml-2 h-2" />
                        </div>
                        <div id="NavOne" className="transition absolute top-[50px] my-4 bg-white drop-shadow-lg px-4 py-1 rounded-lg hidden">
                            <DropDown dropdown={Dropdown} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div onClick={toggleNavTwo} className="hover:text-almost-black transition flex justify-center items-center">
                            Company 
                            <img src="/images/icon-arrow-down.svg" alt="Company" className="ml-2 h-2" />
                        </div>
                        <div id="NavTwo" className="transition absolute top-[50px] my-4 bg-white drop-shadow-lg px-4 py-1 rounded-lg hidden">
                            <DropDown dropdown={DropdownTwo}/>
                        </div>
                    </div>
                    <a className=" text-medium-gray hover:text-almost-black transition ">Careers</a>
                    <a className=" text-medium-gray hover:text-almost-black transition ">About</a>
                </div>
                <div className="flex space-x-4">
                    <button className=" border-none text-medium-gray bg-transparent text-sm hover:bg-medium-gray transition hover:text-almost-white">Login</button>
                    <button className="border-solid border border-medium-gray text-medium-gray text-sm bg-transparent hover:bg-medium-gray hover:text-almost-white transition">Register</button>
                </div>
            </nav>
            {/* small screens */}
            <nav className="flex w-screen justify-between items-center px-4 my-4 md:hidden">
                <img src="/images/logo.svg" alt="Logo" className=" w-20" />
                <img onClick={barToggle} id='menuButton' src="/images/icon-menu.svg" alt="Icon Menu" className="w-8 transform transition"/>
            </nav>
            <div className="flex flex-col justify-center items-center md:flex-row-reverse md:px-52 md:py-8">
                <img src="/images/image-hero-mobile.png" alt="Hero Mobile" className="p-2 my-4 md:hidden"/>
                <img src="/images/image-hero-desktop.png" alt="Hero Destop" className="hidden md:block md:w-[70%]" />
                <div className="md:flex md:flex-col md:items-start justify-center items-center flex flex-col md:pr-[100px]">
                    <h1 className=" text-4xl md:text-[80px] md:leading-[70px] font-bold my-4 md:mb-8">Make remote work</h1>
                    <p className=" text-medium-gray text-base md:text-start md:text-xl text-center mb-4 px-4 md:px-0 md:mb-6">Get your team in sync. no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
                    <button className=" text-almost-white text-base my-2 hover:border md:text-xl md:mb-6 hover:border-solid hover:border-almost-black hover:bg-transparent hover:text-almost-black bg-almost-black transition">Learn more</button>
                    <div className="flex justify-evenly space-x-6 md:space-x-8 my-4 px-2 md:mt-20">
                        <img className="h-4 md:h-6" src="/images/client-audiophile.svg" alt="Client Audiophile" />
                        <img className="h-4 md:h-6" src="/images/client-databiz.svg" alt="Client Databiz" />
                        <img className="h-4 md:h-6" src="/images/client-maker.svg" alt="Client Maker" />
                        <img className="h-4 md:h-6" src="/images/client-meet.svg" alt="Client Meet" />
                    </div>
                </div>
            </div>
            <Bar />
        </div>
    )
}

export default Hero;