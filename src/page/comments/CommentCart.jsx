import { formatDate } from "../../utils/formatDate";
import PostAComments from "./PostAComments";


const CommentCart = ({comments}) => {
    return (
        <div className="my-6 bg-white p-8">
            <div className="">
            {
                comments?.length > 0 ? <div className="">
                    <h1 className=" text-lg font-medium">All Comments</h1>
                    <div className="">
                        {
                            comments.map((comment, index) => (
                                <div key={index} >
                                    <div className="">
                                        <img src="/commentor.png" className="h-4" alt="" />
                                        <div className="">
                                            <p className="text-lg  font-medium underline capitalize underline-offset-4 text-blue-400" >{comment?.user.username}</p>
                                            <p className="text-[12px]" >{formatDate(comment?.createdAt)}</p>
                                        </div>
                                    </div>
                                    {/* comments details */}
                                    <div className=" text-gray-600 mt-5 border p-8">
                                        <p className="md:w-4/5">{comment?.comment}</p>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>
                </div> : <div className="">No Comments Found!</div>
            }
            </div>
            {/* comment filds here*/}
            <PostAComments/>
        </div>

    );
};

export default CommentCart;