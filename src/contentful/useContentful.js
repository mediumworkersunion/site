import { useContext } from 'react'
import { ContentfulContext } from './ContentfulContext'

export const useContentful = () => {
  return useContext(ContentfulContext)
}