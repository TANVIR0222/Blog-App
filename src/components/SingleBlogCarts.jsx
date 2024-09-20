import EditorJSHTML from "editorjs-html";
import { formateDate } from "../../utils/formateDate";

const editorJSHTML = new EditorJSHTML();

const SingleBlogCarts = ({ blog }) => {
  const {
    title,
    description,
    content,
    coverImg,
    category,
    rating,
    author,
    createdAt,
  } = blog || {};
  const htmlcontent = editorJSHTML.parse(content).join("");
  return (
    <div>
      {/* blog header and blog post */}
      <div className="">
        <h1 className="md:text-4xl text-3xl  font-medium mb-4">{title}</h1>
        {/* TODO : need to change author */}
        <p className="mb-6">
          {formateDate(createdAt)} by{" "}
          <span className="text-orange-400">Admin</span>{" "}
        </p>
      </div>
      {/* image sections  */}
      <div className="">
        <img
          src={coverImg}
          alt="blog-cover"
          className="w-full md:h-[520px] object-cover object-center mb-4"
        />
      </div>

      {/* blog details */}
      <div className="mt-8 space-y-4">
        <div
          dangerouslySetInnerHTML={{ __html: htmlcontent }}
          className=" space-y-3 editorjs"
        />
        {/* rating */}
        <div className="">
          <span className="text-lg font-medium">Rating : </span>
          <span>{rating} (base on 3,320 reviews)</span>
        </div>
        {/* rating */}
        <div className="">
            <h3 className="text-lg font-medium">Key Features </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCarts;
