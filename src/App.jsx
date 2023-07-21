import { Routes, Route } from "react-router-dom";

// pages
import {
  AuthorAdminPage,
  AuthorPage,
  AuthorUserPage,
  BookAdminPage,
  BookPage,
  BookUserPage,
  DashboardPage,
  ForbiddenPage,
  HomePage,
  MemberAdminPage,
  MemberUserPage,
  PubliserAdminPage,
  PublisherPage,
  PublisherUserPage,
  RackAdminPage,
  RackUserPage,
  SignInPage,
  SignUpPage,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/forbidder" element={<ForbiddenPage />} />
      <Route path="/admin/authors" element={<AuthorAdminPage />} />
      <Route path="/user/authors" element={<AuthorUserPage />} />
      <Route path="/admin/books" element={<BookAdminPage />} />
      <Route path="/user/books" element={<BookUserPage />} />
      <Route path="/admin/members" element={<MemberAdminPage />} />
      <Route path="/user/members" element={<MemberUserPage />} />
      <Route path="/admin/publishers" element={<PubliserAdminPage />} />
      <Route path="/user/publishers" element={<PublisherUserPage />} />
      <Route path="/admin/racks" element={<RackAdminPage />} />
      <Route path="/user/racks" element={<RackUserPage />} />
      <Route path="/author/:id" element={<AuthorPage />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/publisher/:id" element={<PublisherPage />} />
    </Routes>
  );
};

export default App;
