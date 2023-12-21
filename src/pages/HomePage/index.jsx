import { useEffect, useState } from "react";
import { BannerSection } from "../../components/sections/BannerSection";
import { PostSection } from "../../components/sections/PostSection";
import { blogApi } from "../../services/api";
import Banner from "../../assets/BannerIllustration.jpg"

export const HomePage = () => {
   const [postList, setPostList] = useState([]);

   useEffect(() => {
    const getPosts = async () => {
        try {
            const { data } = await blogApi.get("/news");
            let newData = data;
            newData.reverse();
            newData.length = 2;
            setPostList(newData);
        } catch (error) {
            console.log(error);
        }
    }
    getPosts();
   }, []); 

   return (
      <>
         <BannerSection img={Banner} alt="Banner Home" />
         <PostSection
            title="Últimas Notícias"
            postList={postList}
         />
      </>
   );
};
