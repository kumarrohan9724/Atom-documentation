// import { getCollection } from "@/lib/collections"
// import { notFound } from "next/navigation"
// import { CollectionContent } from "./collection-content"

// interface Props {
//   params: {
//     slug: string
//   }
// }

// export default async function CollectionPage({ params }: Props) {
//   // Ensure params is properly awaited
//   const slug = params.slug
//   const collection = await getCollection(slug)

//   if (!collection) {
//     notFound()
//   }

//   return <CollectionContent collection={collection} />
// }

import { notFound } from "next/navigation"

interface Props {
  params: {
    slug: string
  }
}

export default async function CollectionPage({ params }: Props) {
  // Immediately block access to all collection routes
  notFound()

  // This line will never be reached
  return null
}
