import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'iiitlnews',
  api: {
    projectId: '00musnm3',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
