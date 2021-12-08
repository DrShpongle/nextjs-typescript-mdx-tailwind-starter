import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-8 dark:bg-black">
      <div className="container">
        <div className="flex justify-center">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Powered by{' '}
            <span className="h-4 ml-2">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
