import ionicLogo from '../assets/ionicLogo.png'
import YourBeat from '../assets/YourBeatLogo.png';

const Experience = () =>{
    return (
        <div className="w-full mt-5 h-fit ${mobileMenuOpen ? 'opacity-30' : 'opacity-100'} flex flex-col items-center justify-center mb-[100px]">
           <div className="w-[90%] h-fit ">
                <h3 className="w-full text-center text-4xl mt-10 font-bold">Work Experience</h3>
                <p className="w-full text-center text-xl mt-6 mb-[70px]">Here are a couple of the companies I have worked for!</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 auto-rows-auto w-full h-[50%] justify-evenly gap-10">
                    <div className="aspect-[1.4/1] w-full rounded-xl relative flex items-center justify-center group">
                        {/* <img src={ionic} className='rounded-xl w-full h-full'></img> */}
                        <div className='w-full h-full rounded-xl bg-gradient-to-r from-[#1E90FF] to-black absolute top-0 left-0 z-10 group-hover:bg-black transition-all duration-1000'></div>
                        <img src={ionicLogo} className='rounded-xl z-20 absolute scale-75 group-hover:hidden transition-all duration-1000'></img>
                        <div className='w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center bg-black text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <p>Hovered Content</p>
                        </div>
                    </div>
                    <div className="aspect-[1.4/1] w-full rounded-xl relative group bg-black">
                        {/* <div className='w-full h-full rounded-xl bg-gradient-to-r from-[#1E90FF] to-black absolute top-0 left-0 z-10 group-hover:bg-black transition-all duration-1000'></div> */}
                        <img src={YourBeat} className='rounded-xl z-0 absolute w-full h-full group-hover:opacity-0 transition-all duration-1000'></img>
                        <div className='w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <p>Hovered Content</p>
                        </div>
                    </div>
                    <div className="aspect-[1.4/1] w-full rounded-xl relative group">
                        <div className='flex items-center justify-center w-full h-full rounded-xl bg-gradient-to-r from-green-700 via-green-800 to-green-900 absolute top-0 left-0 group-hover:opacity-0 opacity-100 transition-all duration-1000'>
                            <img src="https://glendor.com/wp-content/uploads/2022/09/logo-footersvg.svg" className='rounded-xl z-20 absolute group-hover:hidden transition-all duration-1000 scale-125'></img>
                        </div>
                        <div className='w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center text-white bg-black rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <p>Hovered Content</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Experience;