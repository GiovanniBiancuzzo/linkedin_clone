import { Button } from "react-bootstrap";

const MyFeed = () => {
  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <form>
            <input type="text" />
            <Button>Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyFeed;
