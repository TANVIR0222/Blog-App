import { useState } from "react";

const PostAComments = () => {
//   const { id } = useParams();
  const [comments, setComments] = useState("");
  return (
    <div>
      <h1 className="text-lg font-medium mb-8"></h1>
      <form>
        <textarea
          name="text"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          cols={"30"}
          rows={"10"}
          placeholder="Share your opinion about this ..."
        />
      </form>
    </div>
  );
};

export default PostAComments;
