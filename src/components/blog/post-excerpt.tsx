import * as React from 'react'

export const PostExcerpt: React.FC<{text: string}> = ({text}) => {
  return text ? (
    <h3 className="max-w-3xl text-center xl:max-w-4xl">{text}</h3>
  ) : null
}
