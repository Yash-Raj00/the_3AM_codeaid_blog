import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const blog = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(1);

  const fetchData = async ()=> {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 1}`);
    setCount(count + 1);
    let data = await d.json();
    setBlogs(data);
  };

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((data) => {
  //       setBlogs(data);
  //     });
  // }, []);

  return (
    <>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.totalCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2>{blogItem.title}</h2>
              </Link>
              <p>{`${blogItem.content.substr(0, 150)}....`}</p>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <button className={styles.btn}>Read More</button>
              </Link>
            </div>
          );
        })}
        </InfiniteScroll>   
      </main>
    </>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir('blogdata');
  let totalCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 1; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(("blogdata/" + item), 'utf-8');
    allBlogs.push(JSON.parse(myfile));    
  }
  return {
    props: {allBlogs, totalCount},
  }
}

export default blog;
