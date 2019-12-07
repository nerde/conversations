import InboxesIndex from './pages/InboxesIndex.vue'
import WorkflowsIndex from './pages/WorkflowsIndex.vue'
import AnalyticsIndex from './pages/AnalyticsIndex.vue'
import SettingsIndex from './pages/SettingsIndex.vue'

const routes = {
  '/': InboxesIndex,
  '/workflows': WorkflowsIndex,
  '/analytics': AnalyticsIndex,
  '/settings': SettingsIndex
}

export default routes
