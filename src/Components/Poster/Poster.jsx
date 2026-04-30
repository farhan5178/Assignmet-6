const Poster = () => {
    return (
        <div className="bg-[#4F39F6] ">
           <div className=" flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 lg:px-20 py-6 md:py-8 text-white gap-6 sm:gap-0">
                 <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-[60px] font-bold">50K+</h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-[#e3eaf0]">Active Users</p>
                </div>
                <div className="text-center">
                    <h1  className="text-3xl sm:text-4xl md:text-[60px] font-bold">200+</h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-[#e3eaf0]">Premium Tools</p>
                    
                </div>
                <div className="text-center">
                    <h1  className="text-3xl sm:text-4xl md:text-[60px] font-bold">4.9</h1>
                    <p  className="text-lg sm:text-xl md:text-2xl text-[#e3eaf0]">Rating</p>
                </div>
           </div>
        </div>
    );
};

export default Poster;