import { useSelector } from "react-redux";
import { formateDate } from "../../utils/formateDate";
import { useGetCommentsQuery } from "../redux/features/comments/commentApi";
import PostAComments from "./PostAComments";

const CommentsCart = ({comment}) => {
  const {user} = useSelector((state) =>  state.auth)
  // console.log(user, "comment cart");

  const { data: comments = []} = useGetCommentsQuery(); // Ensure comments is an array
  // console.log(comments.posts);


  return (
    <div className="my-6 bg-white p-4">
      <div>
        {comments?.length > 0 ? (
          <div>
            <h2 className="text-lg font-medium">All Comments</h2>
            <div>
              {comments.map((comment) => 
              (
                <div key={comment._id} className="">
                  {/* comments img */}
                  <div className="">
                    <img src="/commentor.png" alt="comment" className="h-14" />
                    {/* comments user img and name */}
                    <div className="">
                      <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">
                        {comment?.user?.username} {/* Ensure user object exists */}
                      </p>
                      <p className="text-[12px] italic">
                        {formateDate(comment?.createdAt)} {/* Correct typo */}
                      </p>
                    </div>
                  </div>
                  {/* comments details */}
                  <div className="text-gray-600 mt-5 border p-8">
                    <p className="md:w-4/5">{comment?.comment} {/* Correct typo */}</p>
                  </div>
                </div>
              )
              )}
            </div>
          </div>
        ) : (
          <div className="text-lg font-medium">No comment  found</div>
        )}
      </div>

      {/* comment input hear */}
      <PostAComments />
    </div>
  );
};

export default CommentsCart;
