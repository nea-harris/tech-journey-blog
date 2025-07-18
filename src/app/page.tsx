import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = 'https://images.unsplash.com/photo-1752254091842-3f26af77d5f2?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section>
          <p className={'prose'}>
            Hey I&apos;m Lynnea. This is my academic planning site.
          </p>
          <div className={'my-4'}>
            <i>
              Check out the repo{' '}
                <Link href={'https://github.com/ludu12/tech-journey-blog'}>
                  <button className={'btn btn-sm btn-primary'}>
                      <span className={'text-primary-content'}>
                        here
                      </span>
                  </button>
                </Link>
            </i>
          </div>
        </section>

        <div className={'my-4'}>
          <Image className={'rounded'} src={imageUrl} alt={'My Image'} width={500}
                 height={500}/>
        </div>

        <section className={'prose'}>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
