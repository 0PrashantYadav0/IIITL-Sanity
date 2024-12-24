import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'iiitlclubs',
  api: {
    projectId: 'tucb76da',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
