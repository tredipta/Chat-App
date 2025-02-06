import { useChatStore } from "../Store/useChatStore";
import Sidebar from "../Components/Sidebar";
import ChatContainer from "../Components/ChatContainer";
import NoChatSelected from "../Components/NoChatSelected"; // Assuming this component exists

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex justify-center items-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-xl w-full max-6 h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
