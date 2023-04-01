import { useState } from "react";
import DropDown from "./DropDrown";

const Bar = () => {
    let [Hidden, setHidden] = useState('hidden');
    let [HiddenTwo, setHiddenTwo] = useState('hidden');

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

    const toggleClose = () => {
        let clostButton = document.getElementById("closeButton");
        clostButton.classList.add('rotate-90');
        let bar = document.getElementById('bar');
        bar.classList.add('hidden');
        let menuButton = document.getElementById('menuButton');
        menuButton.classList.remove("rotate-90");
    }

    const visibleToggle = () => {
        if (Hidden.length != 0) {
            setHidden("");
        } else if (Hidden.length == 0) {
            setHidden('hidden');
        }
    }

    const visibleToggleTwo = () => {
        if (HiddenTwo.length != 0) {
            setHiddenTwo("");
        } else if (HiddenTwo.length == 0) {
            setHiddenTwo("hidden");
        }
    }

    return (
        <div id="bar" className=" font-Epilogue text-almost-black text-main w-[60%] bg-almost-white absolute h-screen left-[150px] top-0 px-6 hidden transition-transform">
            <img id="closeButton" onClick={toggleClose} src="/images/icon-close-menu.svg" alt="Icon Close Menu" className="w-7 py-4 ml-[155px] transform transition" />
            <ul className="flex flex-col justify-center items-start text-medium-gray text-sm space-y-4">
                <li onClick={visibleToggle} className="flex flex-col">
                    <div className="flex justify-center items-center">
                        Features 
                        <img src="/images/icon-arrow-down.svg" alt="Features" className="ml-2 h-2" />
                    </div>
                    <DropDown hidden={Hidden} dropdown={Dropdown}/>
                </li>
                <li onClick={visibleToggleTwo} className="flex flex-col ">
                    <div className="flex justify-center items-center">
                        Company 
                        <img src="/images/icon-arrow-down.svg" alt="Company" className="ml-2 h-2" />
                    </div>
                    <DropDown hidden={HiddenTwo} dropdown={DropdownTwo}/>
                </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <div className="flex flex-col my-4 space-y-1">
                <button className=" border-none text-medium-gray bg-transparent text-sm hover:bg-medium-gray transition hover:text-almost-white">Login</button>
                <button className="border-solid border border-medium-gray text-medium-gray text-sm bg-transparent hover:bg-medium-gray hover:text-almost-white transition">Register</button>
            </div>
        </div>
    )
}

export default Bar;