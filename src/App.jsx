/**
 * App — root component.
 * Sidebar is fixed left (top: 56px, below header).
 * Header is fixed top full-width.
 * PageLayout offsets content appropriately.
 */
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import PageLayout from '@/components/layout/PageLayout'
import KnowledgeBasePage from '@/components/features/knowledgeBase/KnowledgeBasePage'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <PageLayout>
        <KnowledgeBasePage />
      </PageLayout>
    </div>
  )
}
