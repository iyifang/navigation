import defaultSettings from '@/settings.js'

const title = defaultSettings.title || 'navigation_v2'

export default function getPageTitle (pageTitle) {
  if (pageTitle)
  {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
} 