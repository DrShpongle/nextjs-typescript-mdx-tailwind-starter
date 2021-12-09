import type {NextPage} from 'next'
import Head from 'next/head'

import PageLayout from 'components/layouts/page-layout'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container space-y-6 text-center">
        <h2>Hi!</h2>
        <p>
          It's another one{' '}
          <span className="font-medium">
            nextjs-typescript-mdx-tailwind-starter
          </span>
        </p>
        <p>
          You can check it out on{' '}
          <a
            className="text-blue-500"
            href="https://github.com/DrShpongle/nextjs-typescript-mdx-tailwind-starter"
          >
            GitHub
          </a>
        </p>
      </div>
    </PageLayout>
  )
}

export default Home
