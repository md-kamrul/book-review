import PropTypes from 'prop-types';
import Tag from "../tag/Tag";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book, bookDetails }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <div onClick={() => bookDetails(book)} className="col-span-1 border border-[#13131326] rounded-2xl cursor-pointer hover:border-[#23BE0A]">
            <div className="card p-5">
                <figure className="w-full h-full flex items-center justify-center bg-[#F3F3F3] rounded-2xl">
                    <div className="p-5">
                        <img src={image} alt="books" className="" />
                    </div>
                </figure>
                <div className="card-body px-2">
                    <div className="flex gap-3 mb-3">
                        {
                            tags.map((tag) => <Tag key={bookId} tag={tag}></Tag>)
                        }
                    </div>
                    <h2 className="card-title mb-4 font-playfairDisplay text-[#131313] font-bold text-2xl">{bookName}</h2>
                    <p className="text-[#131313CC] font-medium">By: {author}</p>
                    <hr className="border border-[#13131326] border-dashed my-4" />
                    <div className="text-[#131313CC] flex justify-between">
                        <div>
                            <p>{category}</p>
                        </div>
                        <div className="flex gap-4">
                            <div>{rating}</div>
                            <div><FaRegStar className="text-[#424242]" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    bookDetails: PropTypes.func,
    book: PropTypes.object,
    bookId: PropTypes.number,
    bookName: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    category: PropTypes.string,
    tags: PropTypes.array
};

export default Book;