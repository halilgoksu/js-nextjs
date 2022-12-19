import Head from "next/head";
import message from "../components/message";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";

export default function Home() {
  //Create a state with all the posts
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orederBy("timestamp", "desc"));
    const unsubscribe = onStapshot(q, (snapshot) => {
      setAllPosts(snapshot.decs.map((doc) => ({ ...doc.dat(), id: doc.id })));
    });
    return unsubscribe;
  };
  useEffect(() => {
    getPosts();
  }, []);
  
  return (
    <div>
      <Head>
        <title>Social Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-12 text-lg font-medium">
        <h2>See what other people sayin </h2>
        {allPosts.map((post) => (
          <message key={post.id} {...post}>
            <Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
              <button>
                {post.commets?.length > 0 ? post.commets?.length : 0} comments
              </button>
            </Link>
          </message>
        ))}
      </div>
    </div>
  );
}
