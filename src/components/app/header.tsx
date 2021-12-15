import {useRouter} from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

import DarkModeToggler from 'components/dark-mode-toggler'

const navLinks = [
  {title: 'Home', path: '/'},
  {title: 'Blog', path: '/blog'},
]

const Header = () => {
  const router = useRouter()
  return (
    <header className="py-4 border-b border-black dark:border-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="relative block text-2xl font-bold md:text-3xl lg:text-4xl">
              Logo
            </a>
          </Link>
          <div className="flex items-center space-x-8">
            <ul className="flex flex-shrink-0 space-x-6 sm:space-x-8 flex-nowrap">
              {navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.path}>
                      <a
                        className={classNames(
                          'hover:text-blue-500 duration-100',
                          router.pathname === item.path
                            ? ' text-blue-500 border-b border-blue-500'
                            : 'black dark:text-white',
                        )}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <DarkModeToggler />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
