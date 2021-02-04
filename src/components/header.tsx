import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Blog', page: '/blog' },
]

const ogImageUrl = '/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
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
      <div className={styles.inner}>
        <a href="/">
          {' '}
          <Image src="/logo.png" alt="Aman Dogra" width={300} height={115} />
        </a>
        <ul>
          <li className={styles.toggletheme}>
            <input type="checkbox" id="toggleTheme" />
            <label for="toggleTheme">&nbsp;</label>
          </li>
          {navItems.map(({ label, page, link }) => (
            <li key={label}>
              {page ? (
                <Link href={page}>
                  <a className={pathname === page ? 'active' : undefined}>
                    {label}
                  </a>
                </Link>
              ) : (
                <ExtLink href={link}>{label}</ExtLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
