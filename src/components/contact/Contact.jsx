import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold my-12 text-center">Get In Touch</h2>
            <div className="text-xl font-semibold text-center flex flex-col gap-7">
                <div className="flex justify-center gap-3 items-center cursor-pointer">
                    <MdEmail className=" text-4xl"/>
                    info@bookreview.com
                </div>
                <div className="flex justify-center gap-3 items-center cursor-pointer">
                    <FaSquareXTwitter className=" text-4xl"/>
                    @book_review
                </div>
                <div className="flex justify-center gap-3 items-center cursor-pointer">
                    <FaFacebook className=" text-4xl"/>
                    /book_review
                </div>
                <div className="flex justify-center gap-3 items-center cursor-pointer">
                    <FaMobileScreenButton className=" text-4xl"/>
                    +8801xxxxxxxxx
                </div>
            </div>
        </div>
    );
};

export default Contact;