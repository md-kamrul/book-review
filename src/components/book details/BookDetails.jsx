import { useLoaderData, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tag from "../tag/Tag";
import { saveWishList } from "../../utility/wishlistLocalStorage";
import { saveReadList } from "../../utility/readlistLocalStorage";

const BookDetails = () => {

    const bookDetails = useLoaderData();
    const { bookId } = useParams();
    const bookDetail = bookDetails.find(bookDetail => bookId == bookDetail.bookId);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookDetail;

    const handleWishList = () => {
        const storedReadList = localStorage.getItem("readLists");
        console.log(storedReadList);

        if (storedReadList) {
            const readBooksList = JSON.parse(storedReadList);
            console.log(readBooksList);
            readBooksList.forEach(element => {
                if (element === bookId) {
                    toast.error("The book is already at Read List");
                }
                else {
                    const check = saveWishList(bookId);
                    console.log(check);
                    if (check === 1) {
                        toast.success("The book has been added to the Wish list!!");
                    }
                    else {
                        toast.error("The book has already added!!");
                    }
                }
            });
        }

        else {
            const check = saveWishList(bookId);
            console.log(check);
            if (check === 1) {
                toast.success("The book has been added to the Wish list!!");
            }
            else {
                toast.error("The book has already added!!");
            }
        }

    }
    const handleRead = () => {
        const check = saveReadList(bookId);
        console.log(check);
        if (check === 1) {
            toast.success("The book has been added to the Read list!!");
        }
        else {
            toast.error("The book has already added!!");
        }
    }

    return (
        <div>
            <div className="hero mt-10 w-full">
                <div className="w-full hero-content flex-col lg:flex-row gap-10">
                    <figure className="w-[40%] flex items-center justify-center bg-[#F3F3F3] rounded-2xl">
                        <div className="p-[70px]">
                            <img src={image} alt="books" className="w-[250px]" />
                        </div>
                    </figure>
                    <div>
                        <h1 className="text-5xl font-bold font-playfairDisplay">{bookName}</h1>
                        <p className="py-6">By: {author}</p>
                        <hr className="border border-[#13131326] border-dashed mb-6" />
                        <p className="mb-6">
                            {category}
                        </p>
                        <hr className="border border-[#13131326] border-dashed mb-6" />
                        <p className="mb-6">
                            <strong className="text-[#131313]">Review:</strong> <span className="text-[#131313B3]">{review}</span>
                        </p>

                        <div className="flex gap-3 mb-3 items-center cursor-pointer">
                            <strong>Tag: </strong>
                            {
                                tags.map((tag) => <Tag key={bookId} tag={tag}></Tag>)
                            }
                        </div>

                        <hr className="border border-[#13131326] border-dashed mb-6" />
                        <p className="mb-3 text-[#131313B3] font-normal">
                            Number of Pages: <span className="text-[#131313] font-semibold">{totalPages}</span>
                        </p>
                        <p className="mb-3 text-[#131313B3] font-normal">
                            Publisher: <span className="text-[#131313] font-semibold">{publisher}</span>
                        </p>
                        <p className="mb-3 text-[#131313B3] font-normal">
                            Year of Publishing: <span className="text-[#131313] font-semibold">{yearOfPublishing}</span>
                        </p>
                        <p className="mb-3 text-[#131313B3] font-normal">
                            Rating: <span className="text-[#131313] font-semibold">{rating}</span>
                        </p>
                        <div className="flex gap-4">
                            <a onClick={handleRead} className="btn bg-transparent border-[#1313134D] text-black hover:text-[#23BE0A] hover:border-[#23BE0A]">Read</a>
                            <a onClick={handleWishList} className="btn bg-[#59C6D2] text-white hover:text-[#59C6D2] hover:border-[#59C6D2]">Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;