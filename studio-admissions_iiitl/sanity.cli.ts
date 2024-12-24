import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'iiitladmissions',
  api: {
    projectId: 'pwuiz0hc',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
