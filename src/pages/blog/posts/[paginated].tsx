import Link from 'next/link'
import {toNumber} from 'lodash'
import {getAllPosts} from 'utils/posts'
import PageLayout from 'components/layouts/page-layout'
import {PostCard} from 'components/blog/'
import {Post} from 'types/blog/'
import blogConfig from 'config/blog.config'

type PostPageProps = {
  posts: Post[]
  prevPosts: number | null
  nextPosts: number | null
}

export const PostPage: React.FC<PostPageProps> = ({
  posts,
  prevPosts,
  nextPosts,
}) => {
  return (
    <PageLayout>
      <div className="container">
        <h2>All posts:</h2>
        <ul className="mt-8 space-y-6">
          {posts.map((post: any) => {
            return <PostCard post={post} key={post.slug} />
          })}
        </ul>
        <div className="flex justify-between mt-10">
          <div>
            {prevPosts !== null && (
              <Link href={'/blog/posts/' + prevPosts}>
                <a className="px-4 py-2 bg-gray-200 rounded-md">
                  &#8592; newer posts
                </a>
              </Link>
            )}
          </div>
          <div>
            {nextPosts !== null && (
              <Link href={'/blog/posts/' + nextPosts}>
                <a className="px-4 py-2 bg-gray-200 rounded-md">
                  older posts &#8594;
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default PostPage

export const getStaticProps = async ({params}: any) => {
  const {paginated} = params
  const paginationNumber = toNumber(paginated)
  const allPosts = getAllPosts()

  const startIndex =
    paginationNumber * blogConfig.postsPerPage - blogConfig.postsPerPage
  const endIndex = paginationNumber * blogConfig.postsPerPage - 1
  const prevPosts = paginationNumber === 1 ? null : paginationNumber - 1
  const nextPosts =
    endIndex >= allPosts.length - 1 ? null : paginationNumber + 1

  return {
    props: {
      posts: allPosts.slice(startIndex, endIndex + 1),
      prevPosts,
      nextPosts,
    },
  }
}

export const getStaticPaths = () => {
  const allPosts = getAllPosts()
  const paths = allPosts.map((_, index) => {
    return {
      params: {paginated: `${index + 1}`},
    }
  })
  return {paths, fallback: false}
}
