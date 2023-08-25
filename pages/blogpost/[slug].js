import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../../styles/blogPost.module.css";

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    const [blog, setBlog] = useState();
    useEffect(()=>{
      if(!router.isReady) return;
      const { slug } = router.query;
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
        return a.json();
      }).then((parsed) => {
        setBlog(parsed);
      })
    }, [router.isReady]);

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.title}>{blog?.title}</h1>
      <hr />
      <p className={styles.para}>{blog?.content}</p>
    </div>
  )
}

export default slug;