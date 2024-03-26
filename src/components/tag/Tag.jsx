const Tag = (tag) => {
    return (
        <div>
            <div className="bg-[#23BE0A0D] round-[30px] p-2 font-medium text-[#23BE0A]">
            <p>#{ tag.tag}</p>
            </div>
        </div>
    );
};

export default Tag;