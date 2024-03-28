import PropTypes from 'prop-types';
import Tag from "../tag/Tag";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { SiGradleplaypublisher } from "react-icons/si";
import { NavLink } from 'react-router-dom';

const ListBook = ({ readBookList }) => {

    const { bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = readBookList
    return (
        <div className='mb-5'>
            <div className="hero bg-base-200 rounded-2xl flex justify-between">
                <div className="w-full hero-content flex-col lg:flex-row">
                    <img src={image} className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{bookName}</h1>
                        <p className="pt-3">By: {author}</p>
                        <div className='flex gap-4 items-center'>
                            <div className='flex items-center gap-1'>
                                <div>Tags:</div>
                                <div className="flex gap-3 mb-3 items-center">
                                    {
                                        tags.map((tag) => <Tag key={bookId} tag={tag}></Tag>)
                                    }
                                </div>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <SiGradleplaypublisher />
                                Year of Publishing: {yearOfPublishing}
                            </div>
                        </div>
                        <div className='text-[#13131399] flex gap-4 mb-4'>
                            <div className='flex gap-1 items-center'>
                                <MdOutlinePeopleAlt />
                                Publisher: {publisher}
                            </div>
                            <div className='flex gap-1 items-center'>
                                <MdOutlineInsertPageBreak />
                                Pages: {totalPages}
                            </div>
                        </div>
                        <hr className="border border-[#13131326] border-dashed my-4" />
                        <div className='flex gap-3'>
                            <div className="bg-[#328EFF26] rounded-[30px] p-2 font-medium text-[#328EFF]">
                                <p>Category: {category}</p>
                            </div>
                            <div className="bg-[#FFAC3326] rounded-[30px] p-2 font-medium text-[#FFAC33]">
                                <p>Rating: {rating}</p>
                            </div>
                            <div>
                                <NavLink to={`/book_details/${bookId}`}>
                                    <div className="bg-[#23BE0A] rounded-[30px] p-2 font-medium text-white cursor-pointer">
                                        <p>View Details</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListBook.propTypes = {
    readBookList: PropTypes.object,
    bookId: PropTypes.number,
    bookName: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    category: PropTypes.string,
    tags: PropTypes.array,
    yearOfPublishing: PropTypes.number,
    publisher: PropTypes.string,
    totalPages: PropTypes.number
};

export default ListBook;