export type PostImageSource = {
  url: string
  description?: string
}

export type FrontMatter = {
  title: string
  date: string
  tags?: string[]
  excerpt?: string
  postImage?: PostImageSource
}

export type Post = {
  frontMatter: FrontMatter
  slug: string
  source: string
}
