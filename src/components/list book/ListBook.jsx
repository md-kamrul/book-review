import PropTypes from 'prop-types';
import Tag from "../tag/Tag";

const ListBook = ({ bookId, readBookList }) => {

    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = readBookList
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">By: {author}</p>
                        <div className="flex gap-3 mb-3">
                            {
                                tags.map((tag) => <Tag key={bookId} tag={tag}></Tag>)
                            }
                        </div>
                        <button className="btn btn-primary">Get Started</button>
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