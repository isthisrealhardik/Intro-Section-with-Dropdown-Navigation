import Bar from "./Bar";

const Hero = () => {

    const barToggle = () => {
        let menuButton = document.getElementById("menuButton");
        menuButton.classList.add("rotate-90");
        let bar = document.getElementById('bar');
        bar.classList.remove('hidden');
    }

    return(
        <div className=" text-almost-black font-Epilogue text-main flex flex-col justify-center items-center relative">
            <nav className="flex w-screen justify-between items-center px-4 my-4">
                <img src="/images/logo.svg" alt="Logo" className=" w-20" />
                <img onClick={barToggle} id='menuButton' src="/images/icon-menu.svg" alt="Icon Menu" className="w-8 transform transition"/>
            </nav>
            <img src="/images/image-hero-mobile.png" alt="Hero Mobile" className="p-2 my-4"/>
            <h1 className=" text-4xl font-bold my-4">Make remote work</h1>
            <p className=" text-medium-gray text-base text-center mb-4 px-4">Get your team in sync. no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
            <button className=" text-almost-white text-base my-2 hover:bg-medium-gray bg-almost-black transition">Learn more</button>
            <div className="flex justify-evenly space-x-5 my-4 px-2">
                <img className="h-4" src="/images/client-audiophile.svg" alt="Client Audiophile" />
                <img className="h-4" src="/images/client-databiz.svg" alt="Client Databiz" />
                <img className="h-4" src="/images/client-maker.svg" alt="Client Maker" />
                <img className="h-4" src="/images/client-meet.svg" alt="Client Meet" />
            </div>
            <Bar />
        </div>
    )
}

export default Hero;