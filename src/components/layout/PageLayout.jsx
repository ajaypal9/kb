/**
 * PageLayout
 * Offsets content below the fixed header (h-14 = 56px) and right of sidebar (w-[220px]).
 * The pagination is fixed to the bottom of the viewport — so main content needs
 * padding-bottom to avoid being hidden behind it.
 */
export default function PageLayout({ children }) {
  return (
    <div className="ml-[220px] mt-14">
      {/* pb-16 leaves room for the fixed bottom pagination bar */}
      <main className="px-6 pt-6 pb-20 min-h-[calc(100vh-56px)]">
        {children}
      </main>
    </div>
  )
}
