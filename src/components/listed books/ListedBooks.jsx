import { IoIosArrowDropdown } from "react-icons/io";

const ListedBooks = () => {
    return (
        <div className="mt-9">

            {/* heading */}
            <h2 className="w-full bg-[#1313130D] rounded-2xl py-8 text-center text-[#131313] text-[28px] font-bold mb-8">Books</h2>

            {/* drop down menu */}
            <div className="flex justify-center mb-14">
                <details className="dropdown">
                    <summary className="w-52 m-1 btn text-white font-semibold text-lg bg-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A]">Sort By <IoIosArrowDropdown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-base-200 text-[#131313CC] font-normal">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            {/* tab */}
            <div role="tablist" className="tabs tabs-lifted text-lg">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Read Books</div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Wishlist Books</div>
            </div>

        </div>
    );
};

export default ListedBooks;