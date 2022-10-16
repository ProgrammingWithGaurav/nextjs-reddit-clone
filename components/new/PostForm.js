import { useRouter } from "next/router";
import { useState } from "react";
import {supabase} from '../../services/supabaseClient';
import Loading from "../Loading";

const style = {
  wrapper: "flex flex-col space-y-6",
  input:
    "bg-[#1a1a1b] border border-[#343536] px-4 py-2 text-sm text-left text-white focus:outline-none",
  title: "border-b border-[#343536] pb-3 text-lg font-medium",
  postBtn:
    "bg-gray-200 px-4 py-1.5 text-sm font-semibold text-[#1A1A1B] rounded-full",
  postBtnContainer: "flex justify-end py-2",
};

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const createPost = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await supabase.from("feed").insert([
        {
          author: "author",
          title,
          content,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      router.push("/");
    }
  };
  return (
    <div className={style.wrapper}>
      {isLoading && <Loading />}
      <h1 className={style.title}>Create a Post</h1>

      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b]  p-4">
        <input value={title} onChange={event => setTitle(event.currentTarget.value)} className={style.input} type="text" placeholder="Title" />
        <textarea
          className={style.input}
          placeholder="Text (required)"
          name="content"
          id="content"
          col="30"
          rows="10"
          value={content}
          onChange={event => setContent(event.currentTarget.value)}
        />

        <div className={style.postBtnContainer}>
          <button onClick={createPost} className={style.postBtn}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
