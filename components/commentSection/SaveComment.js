import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const style = {
  wrapper: "flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4",
  input:
    "rounded border border-[#343536] bg-[#1a1a1b] px-4 py-2 text-left text-sm text-white focus:outline-none",
  commentBtn:
    "rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1A1A1B]",
};

const SaveComment = ({ id }) => {
  const [input, setInput] = useState("");

  const saveComment = async () => {
    try {
        // for quick ui functioning
      const commentToSend = input;
      setInput("");

      await addDoc(collection(db, "reddit_posts", id, "comments"), {
        text: commentToSend,
        author: 'Gaurav',
        profileImage: 'https://avatars.githubusercontent.com/u/88154142?s=40&v=4',
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setInput("");
    }
  };
  return (
    <div className={style.wrapper}>
      <div className="text-sm">
        Comment as <span className="text-[#4296CA">Gaurav</span>
      </div>
      <textarea
        value={input}
        onChange={(even) => setInput(event.target.value)}
        className={style.input}
        cols="30"
        rows="8"
        placeholder="What are your thoughts?"
      />

      <div className="flex justify-end pt-2">
        <button onClick={() => saveComment()} className={style.commentBtn}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default SaveComment;
