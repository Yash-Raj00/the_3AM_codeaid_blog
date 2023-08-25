import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";

const blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2>{blogItem.title}</h2>
              </Link>
              <p>
                {`${blogItem.content.substr(0, 150)}....`}
              </p>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default blog;
