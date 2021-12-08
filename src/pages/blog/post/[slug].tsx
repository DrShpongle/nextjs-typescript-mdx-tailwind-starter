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
  // TODO
  // needed fields: ['source', 'frontMatter']
  const post = getSourceBySlug(params.slug, ['slug', 'source', 'frontMatter'])
  const {source, frontMatter} = post
  const mdxSource = await serialize(source as string, {
    scope: frontMatter,
    mdxOptions: {
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
  // TODO
  // needed fields: ['slug']
  const allPosts = getAllPosts(['slug', 'source', 'frontMatter'])
  const paths = allPosts.map((post) => {
    return {
      params: {slug: post.slug},
    }
  })
  return {paths, fallback: false}
}
