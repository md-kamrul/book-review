const Hero = () => {
    return (
        <div className="mb-[100px]">
            <div className="hero bg-[#1313130D] rounded-3xl mt-10 px-28 py-16">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src="https://i.ibb.co/Hzv4r9y/id-1.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold">Books to freshen <br />up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white hover:text-[#23BE0A] hover:border-[#23BE0A] mt-12"><a href="#books">View The List</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;