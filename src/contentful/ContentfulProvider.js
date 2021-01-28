import { ContentfulContext } from './ContentfulContext'

export const ContentfulProvider = ({children, data}) => {
  console.log({data})
  return (
    <ContentfulContext.Provider value={data}>{children}</ContentfulContext.Provider>
  )
}