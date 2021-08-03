import { FC } from "react"
import fs from "fs"
import matter from "gray-matter"

interface IPostMeta {
  title: string
}

interface IPost {
  meta: IPostMeta
  content: string
}

interface IProps {
  post: IPost;
}

const Post: FC<IProps> = ({ post }) => {

  console.log(post)

  return (
    <h1>{post?.meta?.title ?? "Tchau"}</h1>
  )

}

export async function getStaticProps({ ...context }) {
  const { slug } = context.params

  const content = fs
                  .readFileSync(`_posts/${slug}.md`).toString()
  
  const info = matter(content);

  const article = {
    meta: {
      ...info.data,
      slug
    },
    content: info.content
  }

  return {
    props: {
      post: article
    }
  }

}

export async function getStaticPaths() {
  const files = fs.readdirSync("_posts")

  const paths = files.map(file => ({
    params: {
      slug: file.split('.')[0]
    }
  }))

  return {
    paths,
    fallback: false
  }

}

export default Post