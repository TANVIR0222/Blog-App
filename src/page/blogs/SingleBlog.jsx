import { useParams } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../../redux/features/blogs/blogsApi";
import SingleBlogCarts from "../../components/SingleBlogCarts";
import CommentsCart from "../../components/CommentsCart";
import RelatedBlog from "./RelatedBlog";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blogs, error, isLoading } = useFetchBlogByIdQuery(id);

  return (
    <div className=" text-primary container mx-auto mt-8">
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}

      <div className="">
        {blogs?.posts && (
          <div className=" flex flex-col md:flex-row justify-between items-start md:gap-8">
            <div className=" lg:w-2/3 w-full">
              <SingleBlogCarts blog={blogs.posts} />
              {/* single comment cart  */}
              <div className="">
                <CommentsCart comments={blogs?.comments} />
              </div>
            </div>
            <div className=" bg-white lg:w-1/3 w-full">
            <RelatedBlog />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
