import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/_ijjk',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/ijjk',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/jj-kasper-0b5392166/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:jj@jjsweb.site?subject=Notion Blog',
  },
]
export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        {' '}
        <Image src="/avatar.png" alt="Aman Dogra" width={320} height={320} />
      </div>
      <h1>A piece of my head</h1>
      <h2>
        We spend our lives carving out a little corner of the world to call it
        ours. This one belongs to me, Aman Dogra.
      </h2>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
