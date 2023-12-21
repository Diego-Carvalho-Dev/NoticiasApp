import { useNavigate, useParams } from "react-router-dom";
import { ContentSection } from "../../components/sections/ContentSection";
import { PostSection } from "../../components/sections/PostSection";
import { useEffect, useState } from "react";
import { blogApi } from "../../services/api";
import Banner from "../../assets/BannerIllustration.jpg"
import { BannerSection } from "../../components/sections/BannerSection";

export const PostPage = () => {
   const [loading, setLoading] = useState(false);
   const [currentPost, setCurrentPost] = useState(null);
   const [postList, setPostList] = useState([]);

   const navigate = useNavigate();

   const { id } = useParams();

   useEffect(() => {
      scrollTo(0, 0);

      const getPost = async () => {
         try {
            setLoading(true);
            const { data } = await blogApi.get(`/news/${id}`);
            setCurrentPost(data);
         } catch (error) {
            console.log(error);
            navigate("/404");
         } finally {
            setLoading(false);
         }
      };
      getPost();
   }, [id]);

   useEffect(() => {
      const getPosts = async () => {
         try {
            const { data } = await blogApi.get("/news");
            let newData = data.filter((post) => post.id !== Number(id));
            newData.reverse();
            newData.length = 2;
            setPostList(newData);
         } catch (error) {
            console.log(error);
         }
      };
      getPosts();
   }, [id]);

   return (
      <>
         {loading ? (
            <p>Carregando...</p>
         ) : (
            <>
               <BannerSection img={Banner} alt="Banner Notícia" />
               <ContentSection post={currentPost} />
               <PostSection title="Leia também" postList={postList} />
            </>
         )}
      </>
   );
};
