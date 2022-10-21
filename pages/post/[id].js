import Post from "../../components/common/Post";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import Comments from "../../components/commentSection/Comments";
import { db } from "../../firebase";
import { onSnapshot, orderBy, query, collection ,doc, getDoc} from "firebase/firestore";
import SaveComment from '../../components/commentSection/SaveComment';

const style = {
  wrapper: "flex min-h-screen flex-col bg-black text-white",
  container: "mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-[5rem] px-6",
  containerWrapper: "w-full space-y-4 lg:w-2/3",
};

const PostView = () => {
  const router = useRouter();
  const id = router.query
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
    const docRef = doc(db, 'reddit_posts', id.id);
    const getdoc = await getDoc(docRef)
      setData(getdoc.data())
    }
    getdata();
   }, [db]);

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <div className={style.containerWrapper}>
          <Post {...data}/>
          <SaveComment id={id && id.id} />
          <Comments id={id && id.id} />
        </div>
      </div>
    </div>
  );
};

export default PostView;
