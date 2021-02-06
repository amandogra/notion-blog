import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import YouTube from '../components/svgs/youtube'
import Instagram from '../components/svgs/instagram'
import LinkedIn from '../components/svgs/linkedin'

// import sharedStyles from '../styles/shared.module.css'
// import contactStyles from '../styles/contact.module.css'

const contacts = [
  {
    Comp: YouTube,
    alt: 'youtube icon',
    link: 'https://www.youtube.com/channel/UCLv8kkOKbORo51vJbTQLqhw',
  },
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/amandogra',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/amandogra',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/amandogra/',
  },
  {
    Comp: Instagram,
    alt: 'instagram icon',
    link: 'https://www.instagram.com/amandogra/',
  },
]
export default () => (
  <>
    <Header titlePre="Home" />
    <div className="flex flex-1 mx-auto p-8 md:pt-24 pt-36">
      <div className="self-center">
        <h1 className="font-sans text-6xl font-extrabold">Hello!</h1>
        <p className="font-serif text-xl pt-4">
          We spend our lives carving out a little corner of the world to call it
          ours.
        </p>
        <p className="font-serif text-xl">
          This one belongs to me, Aman Dogra.
        </p>
        <p className="font-serif text-xl pt-4">Thanks for visiting!</p>
        <div className="flex justify-start justify-start space-x-4 pt-4 pb-24">
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </div>
  </>
)
