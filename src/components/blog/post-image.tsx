import * as React from 'react'
import Image from 'next/image'
import {PostImageSource} from 'types/blog/'

type PostImageProps = {
  source: PostImageSource
}

export const PostImage: React.FC<PostImageProps> = ({source}) => {
  const {url, description} = source
  return url ? (
    <div className="flex flex-col items-center w-full space-y-4">
      <div className="relative overflow-hidden h-56 sm:h-96 lg:h-[28rem] xl:h-[36rem] rounded-xl w-full">
        <Image src={url} layout="fill" objectFit="cover" alt="some image" />
      </div>
      {description && (
        <div className="text-sm italic text-center text-gray-500">
          {description}
        </div>
      )}
    </div>
  ) : null
}
