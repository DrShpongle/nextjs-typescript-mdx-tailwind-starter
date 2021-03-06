import Link from 'next/link'
import Head from 'next/head'
import {isEmpty} from 'lodash'
import {getAllPosts} from 'utils/posts'
import PageLayout from 'components/layouts/page-layout'
import {PostCard} from 'components/blog/'
import {Post} from 'types/blog/'
import blogConfig from 'config/blog.config'

type BlogPageProps = {
  posts: Post[]
}

const Blog: React.FC<BlogPageProps> = ({posts}) => {
  return (
    <PageLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {!isEmpty(posts) ? (
          <>
            <h2>Recent posts:</h2>
            <ul className="mt-8 space-y-6">
              {posts.map((post: any) => {
                return <PostCard post={post} key={post.slug} />
              })}
            </ul>
            <div className="flex justify-center mt-16">
              <Link href="/blog/posts/1">
                <a className="px-6 py-3 text-white duration-100 bg-blue-500 rounded-lg hover:bg-blue-700 hover:cursor-pointer">
                  View all posts
                </a>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">There are no posts yet 🥲</div>
        )}
      </div>
    </PageLayout>
  )
}

export default Blog

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts.slice(0, blogConfig.postsBlogPage),
    },
  }
}
