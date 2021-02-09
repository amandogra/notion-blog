import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'

const ogImageUrl = '/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className="fixed w-full z-10">
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Aman Dogra</title>
        <meta name="description" content="Aman Dogra's online home" />
        <meta name="og:title" content="Aman Dogra" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@amandogra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Aman Dogra</span>
                <div className="h-8 w-auto sm:h-10">
                  <Image
                    src="/logo.png"
                    alt="Aman Dogra"
                    width={150}
                    height={55}
                  />
                </div>
              </a>
            </div>
            <div className="flex items-center justify-end flex-1 lg:w-0">
              <a
                href="/blog"
                title="Blog"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 uppercase h-5 w-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
