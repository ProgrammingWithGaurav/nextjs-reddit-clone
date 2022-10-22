import Header from "../components/header";
import Banner from "../components/community/Banner";
import CreatePost from "../components/feed/CreatePost";
import About from "../components/community/About";
import Feed from "../components/feed/index";
import { useEffect, useState } from "react";
import Login from "../components/Login";
import { onSnapshot, orderBy, query, collection } from "firebase/firestore";
import {  db } from "../firebase";
import Head from "next/head";

const style = {
  wrapper: `flex min-h-screen flex-col bg-black text-white`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
};

const Home = () => {
  const [myPosts, setMyPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "reddit_posts"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setMyPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })));
        }
      ),
    [db]
  );

  return <>{ true ? <HomePage myPosts={myPosts} /> : <Login />}</>;
};

const HomePage = ({myPosts}) => {
  return (
    <div>
    <Head>
  <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/128/3670/3670226.png" />
        <title>Reddit 2.0</title>
    </Head>
    <div className={style.wrapper}>
      <Header />
      <Banner />
      <main className={style.main}>
        <div className={style.content}>
          <CreatePost />
          <Feed posts={myPosts} />
        </div>
        <div className={style.infoContainer}>
          <About />
        </div>
      </main>
    </div>
    </div>
  );
};

export default Home;
