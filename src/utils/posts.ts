import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import {FrontMatter, Post} from 'types/blog'

const POSTS_PATH = join(process.cwd(), 'src/posts')

export const getAllPostPaths = () => {
  return fs.readdirSync(POSTS_PATH)
}

export function getSourceBySlug(path: string): Post {
  const realSlug = path.replace(/\.mdx$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  return {
    slug: realSlug,
    source: content,
    frontMatter: data as FrontMatter,
  }
}

export function getAllPosts() {
  const allPosts = getAllPostPaths()
    .map((path) => getSourceBySlug(path))
    .sort(
      ({frontMatter: {date: d1}}, {frontMatter: {date: d2}}) =>
        new Date(d2).getTime() - new Date(d1).getTime(),
    )
  return allPosts
}
