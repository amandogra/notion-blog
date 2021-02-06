import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/header'

// import blogStyles from '../../styles/blog.module.css'
// import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

export default ({ posts = [], preview }) => {
  return (
    <>
      <Header titlePre="Blog" />
      {preview && (
        <div className="previewAlertContainer">
          <div className="previewAlert">
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className="escapePreview">Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className={'blogIndex'}>
        <h1 className="a11y">Blog</h1>
        {posts.length === 0 && (
          <p className="noPosts">There are no posts yet</p>
        )}
        {posts.map(post => {
          return (
            <div className="postPreview" key={post.Slug}>
              <div className="titleContainer">
                {!post.Published && <span className="draftBadge">Draft</span>}
                <h2>
                  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    {post.Page}
                  </Link>
                </h2>
                {post.Date && (
                  <div className="posted">{getDateStr(post.Date)}</div>
                )}
              </div>
              <div className="excerptContainer">
                {post.Cover && (
                  <a href={getBlogLink(post.Slug)}>
                    <div className="cover">
                      <Image
                        src={post.Cover}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left top"
                      />
                    </div>
                  </a>
                )}
                {post.Excerpt && <p className="excerpt">{post.Excerpt}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
