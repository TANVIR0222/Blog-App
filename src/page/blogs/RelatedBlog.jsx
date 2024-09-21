import { Link, useParams } from "react-router-dom";
import { useFetchRelatedBlogsQuery } from "../../redux/features/blogs/blogsApi";

const RelatedBlog = () => {
  const { id } = useParams();
  const { data: blogs = [], isLoading, error } = useFetchRelatedBlogsQuery(id);
  console.log(blogs);

  return (
    <div>
      <h1 className="text-2xl font-medium pt-8 px-8 pb-5">Related Blogs</h1>
      <hr />

      <div className="">
        {blogs.length > 0 ? (
          <div className=" space-y-4 mt-5">
            {blogs.map((blog) => (
              <Link
              to={`/blogs/${blog._id}`}
                key={blog._id}
                className=" flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4"
              >
                <div className=" size-14">
                  <img
                    src={blog.coverImg}
                    alt="relatedimg"
                    className="w-full h-full rounded-full ring-2 ring-blue-700"
                  />
                </div>
                <div className="">
                    <h1 className=" font-medium text-[#1E73BE]">{blog?.title.substring(0 ,50)}</h1>
                    <p className="text-sm">{blog?.description.substring(0 ,50)}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className=" p-8"> No related blogs found</div>
        )}
      </div>
    </div>
  );
};

export default RelatedBlog;
