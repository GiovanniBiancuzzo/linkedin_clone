import { GrLike } from "react-icons/gr";
import { BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";
import "../styles/postCard.css";

const PostCard = () => {
  return (
    <div className="post">
      <div className="post-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at
          quibusdam quasi animi qui aliquam cumque voluptatum quisquam
          voluptate. Sequi, consequuntur rerum nisi totam ullam odio dolore enim
          in deleniti.
        </p>
      </div>

      <hr />
      <div className="post-buttons">
        <span>
          {" "}
          <GrLike /> Like
        </span>
        <span>
          {" "}
          <BiCommentDetail /> Comment
        </span>
        <span>
          {" "}
          <RiShareForwardLine /> Share
        </span>
        <span>
          {" "}
          <RiSendPlaneFill /> Send
        </span>
      </div>
    </div>
  );
};

export default PostCard;
