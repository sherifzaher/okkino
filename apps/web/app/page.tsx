import { gql } from '../data-access/graphql-client'
import Image from 'next/image'

export default async function Page() {
  const result = await gql.GetUsers()
  console.table(result.users)
  return result.users.map((user) => (
    <figure key={user.id} className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 text-white m-6">
      <Image
        className="w-24 h-24 rounded-full"
        src={`https://i.pravatar.cc/150?u=${user.id}`}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg">
            “Tailwind CSS is the only framework that Ive seen scale on large teams. It’s easy to
            customize, adapts to any design, and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>{user.id}</div>
          <div>{user.email}</div>
        </figcaption>
      </div>
    </figure>
  ))
}
