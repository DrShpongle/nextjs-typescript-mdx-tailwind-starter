import * as React from 'react'

type Props = {
  children: React.ReactNode
}

const MdxComponent: React.FC<Props> = ({children}: Props) => {
  return (
    <div className="p-8 mt-6 text-white bg-black dark:text-black dark:bg-white rounded-xl">
      {children}
    </div>
  )
}

export default MdxComponent
