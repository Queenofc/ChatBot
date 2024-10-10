import NewPrompt from "../../components/newPrompt/newPrompt";
import "./chatPage.css";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message from ai</div>
          <div className="message user">
            Test message from user Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur molestiae officia quae dolor, vel autem
            tempora qui eveniet rerum. A perferendis illum porro numquam
            suscipit dolores modi facilis soluta cupiditate.
          </div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
