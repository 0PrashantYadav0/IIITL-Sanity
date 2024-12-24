import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'iiitlpeople',
  api: {
    projectId: '0ddok1ih',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
