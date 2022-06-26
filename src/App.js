import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import BlogPage from "./component/BlogPage";
import ProfilePage from "./component/ProfilePage";
import BlogPageDetails from "./component/BlogPageDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 Page</>}></Route>
      </Routes>
    </div>
  );
}

export default App;
