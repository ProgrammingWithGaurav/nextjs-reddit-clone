import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import {
  addDoc,
  collection,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";
import { ChatAltIcon } from "@heroicons/react/outline";

TimeAgo.addDefaultLocale(en);
const timeago = new TimeAgo("en-US");

const style = {
  profileImage: "object-contain",
  profileImageContainer:
    "h-[1.2rem] w-[1.2rem] overflow-hidden rounded-full relative",
  postInfoContainer: "flex gap-[.4rem]",
  icon: 'text-[#818284]',
  icons: 'flex gap-[.4rem]',
  commentContainer: 'my-[1rem] flex flex-col gap-[1rem]',
  wrapper: 'bg-[#1A1A1A] p-4 rounded my-2',
  reply: 'flex items-center gap-[.2rem] text-[#818384]'
};

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "reddit_posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) =>
          setComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
      ),
    [db]
  );

  
  return (
    <div>
      <h1>{comments && comments.length === 0 ? 'No Comment': `Comments (${comments.length})`}</h1>

      {comments &&
        comments.map((comment, id) => (
      <div className={style.wrapper}>
          <div className={style.commentContainer} >
          <div className={style.postInfoContainer} key={id}>
            <div className={style.profileImageContainer}>
              <Image
                src={comment.profileImage}
                className={style.profileImage}
                layout="fill"
              />
            </div>
            <span>{comment.author}</span>
            <span>•</span>
            {/* <span>{timeago.format(new Date(comment.timestamp)), 'twitter-now'}</span>
             */}
            <span>October 20</span>
            </div>
            <div>{comment.text}</div>
            <div className={style.icons}>
              <span className={style.icon}>
                <UpvoteIcon />
              </span>
              <span>0</span>
              <span className={style.icon}>
                <DownvoteIcon />
              </span>

              <span className={style.reply}>
                <ChatAltIcon className="h-6 w-6" />
                <span>Reply</span>
              </span>

              <span className={style.icon}>Give</span>
              <span className={style.icon}>Share</span>
              <span className={style.icon}>Save</span>
              <span className={style.icon}>Follow</span>
          </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default Comments;
