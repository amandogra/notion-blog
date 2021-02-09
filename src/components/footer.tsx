import ExtLink from './ext-link'

export default () => (
  <>
    <footer className="w-full text-center text-xs border-t border-grey p-4 pin-b">
      <span>&copy; Aman Dogra | </span>
      <span>
        Created with &#10084; using{' '}
        <ExtLink href="https://www.notion.so/">Notion</ExtLink>
      </span>
      <span>
        , <ExtLink href="https://vercel.com">Vercel</ExtLink>
      </span>
      <span>
        , <ExtLink href="https://nodejs.dev">Node.js</ExtLink>
      </span>
      <span>
        , and{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          Notion Blog boilerplate
        </ExtLink>
      </span>
    </footer>
  </>
)
