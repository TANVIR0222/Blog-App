import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostCommentsMutation } from "../redux/features/comments/commentApi";
import { useSelector } from "react-redux";

const PostAComments = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

// TODO : Add a function to handle the form submission

  const {user} = useSelector((state) =>  state.auth)
  const [postComment] =  usePostCommentsMutation();
  

  const onSubmit = async(data) =>{
    if(!user){
      alert('Please login to post a comment')
      navigate('/login')
      return
    }

    const comment = data.comment
    
    const newComment  = {
      comment: comment,
      user: user._id,
      postId: id
    }

    try {
      const res = await  postComment(newComment).unwrap();
      reset();      
    } catch (error) {
      console.error(error);
    }
    
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          type="text"
          name="comment"
          cols={'30'}
          rows={'10'}
          placeholder="Share your opinion about the post...."
          className="w-full bg-bgPrimary focus:outline-none p-5"
          {...register("comment", { required: true })}
        />
      {errors.text && <span className="text-red-500 text-lg font-medium italic" >This field is required</span>}

        <button className=" w-full bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default PostAComments;
