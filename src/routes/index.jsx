import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { PostPage } from "../pages/PostPage";
import { ErrorPage } from "../pages/ErrorPage";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/post/:id" element={<PostPage />} />
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
};
