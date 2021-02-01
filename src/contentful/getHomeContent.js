import { useMemo } from 'react';
import { useContentful } from "react-contentful";
import { fetchGraphQL } from './fetchGraphql';

const extractEntries = (dataRaw) => {
  if (!dataRaw) return []
  const dataArray = dataRaw.homepageContentCollection.items
  const data = {}
  for (const entry of dataArray) {
    // check if there are more like this
    console.log(entry)
    const fieldType = entry.type
    const filteredEntries = dataArray.filter(d => d.type === fieldType)
    if (filteredEntries.length > 1) {
      // multiple entry
      data[fieldType] = data[fieldType] || []
      data[fieldType].push(entry)
      continue
    }
    data[fieldType] = entry
  }
  console.log(dataArray, data)
  return {dataArray, data}
}

export const getHomeContent = async (preview) => {
  const entries = await fetchGraphQL(
    `query {
      homepageContentCollection${preview ? '(preview: true)':''} {
        items {
          type
          text
          subText
          link
          attributionName
          attriibutionContext
          order
          media {
            url
          }
          
        }
      }
    }`,
    preview
  )
  console.log(entries)
  return extractEntries(entries.data)
}