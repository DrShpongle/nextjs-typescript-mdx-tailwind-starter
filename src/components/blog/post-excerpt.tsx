import * as React from 'react'

export const PostExcerpt: React.FC<{text: string}> = ({text}) => {
  return text ? (
    <div className="w-full max-w-3xl text-xl font-semibold md:text-2xl xl:max-w-4xl">
      {text}
    </div>
  ) : null
}
