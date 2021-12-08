import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 md:py-12 lg:py-16 xl:py-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout
