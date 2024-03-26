import { IoIosArrowDropdown } from "react-icons/io";

const ListedBooks = () => {
    return (
        <div className="mt-9">

            {/* heading */}
            <h2 className="w-full bg-[#1313130D] rounded-2xl py-8 text-center text-[#131313] text-[28px] font-bold mb-8">Books</h2>

            {/* drop down menu */}
            <div className="flex justify-center">
            <details className="dropdown">
                <summary className="w-52 m-1 btn text-white font-semibold text-lg bg-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A]">Sort By <IoIosArrowDropdown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-base-200">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            </div>

        </div>
    );
};

export default ListedBooks;