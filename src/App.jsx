import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar";
import CreatePost from "../Component/CreatePost";
import PostList from "../Component/PostList";
import { useState } from "react";
import PostListProvider from "../Store/Post_list_store";


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
   <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
   </PostListProvider>
      
  );
}

export default App;
