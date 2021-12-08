import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import {FrontMatter, Post} from 'types/blog'

const POSTS_PATH = join(process.cwd(), 'src/posts')

export const getAllPostPaths = () => {
  return fs.readdirSync(POSTS_PATH)
}

export function getSourceBySlug(
  path: string,
  fields: string[] = ['slug', 'source', 'frontMatter'],
): Post {
  const realSlug = path.replace(/\.mdx$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  return {
    slug: realSlug,
    source: content,
    frontMatter: data as FrontMatter,
  }

  // const post = fields
  //   .map((field) => {
  //     let value = {}
  //     if (field === 'slug') {
  //       value = realSlug
  //     } else if (field === 'source') {
  //       value = content
  //     } else if (field === 'frontMatter') {
  //       value = data
  //     }
  //     return value && {[field]: value}
  //   })
  //   .reduce((acc, cur) => ({...acc, ...cur}), {})
  // return post
}

export function getAllPosts(fields: string[] = []) {
  const allPosts = getAllPostPaths()
    .map((path) => getSourceBySlug(path, fields))
    .sort(
      ({frontMatter: {date: d1}}, {frontMatter: {date: d2}}) =>
        new Date(d2).getTime() - new Date(d1).getTime(),
    )
  return allPosts
}
