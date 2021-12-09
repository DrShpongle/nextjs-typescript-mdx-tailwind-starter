import {getAllPosts, getSourceBySlug} from 'utils/posts'
import PostLayout from 'components/layouts/post-layout'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {rehypeAccessibleEmojis} from 'rehype-accessible-emojis'
import {Post} from 'types/blog/'

type PostPageProps = {
  post: Pick<Post, 'slug' | 'frontMatter'> & {source: MDXRemoteSerializeResult}
}

export const PostPage: React.FC<PostPageProps> = ({post}) => {
  return <PostLayout {...post} />
}

export default PostPage

export const getStaticProps = async ({params}: any) => {
  const post = getSourceBySlug(params.slug)
  const {source, frontMatter} = post
  const mdxSource = await serialize(source as string, {
    scope: frontMatter,
    mdxOptions: {
      remarkPlugins: [require('remark-prism')],
      rehypePlugins: [rehypeAccessibleEmojis],
    },
  })
  const serializedPost = {
    ...post,
    source: mdxSource,
  }
  return {
    props: {post: serializedPost},
  }
}

export const getStaticPaths = () => {
  const allPosts = getAllPosts()
  const paths = allPosts.map((post) => {
    return {
      params: {slug: post.slug},
    }
  })
  return {paths, fallback: false}
}
