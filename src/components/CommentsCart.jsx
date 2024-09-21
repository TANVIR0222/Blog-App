import { formateDate } from "../../utils/formateDate";
import PostAComments from "./PostAComments";

const CommentsCart = ({ comments }) => {
  return (
    <div className="my-6 bg-white p-4">
        {/* commenta see func  */}
      <div>
        {comments?.length > 0 ? (
          <div className="">
            <h2 className=" text-lg font-medium" >All Comments</h2>
            <div className="">
                {
                    comments.map((comment, index) => 
                        <div key={index} className="">
                            {/* comments img  */}
                            <div className="">
                                <img src="/commentor.png" alt="comment" className="h-14" />
                            {/* comments user img and  name */}
                                <div className="">
                                    <p className=" text-lg font-medium underline capitalize underline-offset-4 text-blue-400">{comment?.user.username}</p>
                                    <p className=" text-[12px] italic">{formateDate(comment?.createdAt)}</p>
                                </div>
                            </div>
                            {/* comments details  */}
                            <div className=" text-gray-600 mt-5 border p-8">
                                <p className=" md:w4/5">{comment?.comment}</p>
                            </div>
                        </div>
                    )
                }
            </div>
          </div>
        ) : (
          <div className=" text-lg font-medium">No comment found</div>
        )}
      </div>

        {/* comment input hear */}
            <PostAComments />
    </div>
  );
};

export default CommentsCart;
