import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UGC Talents France - Grom Agency',
  description: 'Découvrez nos talents UGC France - Grom Agency',
  robots: {
    index: false,
    follow: false,
  },
}

export default function UGCFrancePage() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <iframe
        src="/documents/ugc-talents-france.pdf"
        className="w-full h-full border-0"
        title="UGC Talents France - Grom Agency"
      />
    </div>
  )
}
