import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {isEmpty} from 'lodash'
import {Post} from 'types/blog/'

type PostCardProps = {
  post: Post
}

export const PostCard: React.FC<PostCardProps> = ({post}) => {
  const {frontMatter, slug} = post
  const {title, excerpt, date, postImage} = frontMatter
  return (
    <div className="flex flex-col py-4 pl-4 pr-4 space-y-4 bg-black lg:pr-10 md:space-y-0 md:space-x-6 lg:space-x-10 md:flex-row rounded-xl dark:bg-white">
      {postImage?.url && (
        <div className="flex-shrink-0 w-full overflow-hidden h-52 md:w-72 rounded-xl">
          <Link href={`/blog/post/${slug}`}>
            <a className="relative block w-full h-full text-inherit">
              <Image
                alt="some picture"
                src={postImage.url}
                layout="fill"
                quality={75}
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
      )}
      <div className="flex flex-col flex-grow space-y-3">
        <h3 className="leading-tight text-blue-500 line-clamp-2">
          <Link href={`/blog/post/${slug}`}>
            <a className="text-inherit">{title}</a>
          </Link>
        </h3>
        <div className="flex-grow">
          {excerpt && (
            <div className="text-white dark:text-black">{excerpt}</div>
          )}
        </div>

        {!isEmpty(date) && (
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-blue-500">date:</span>
            <span className="text-gray-400">{date}</span>
          </div>
        )}
      </div>
    </div>
  )
}
