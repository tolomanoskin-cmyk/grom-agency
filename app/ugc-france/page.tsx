import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UGC Talents France | Grom Agency',
  description: 'Découvrez nos talents UGC exclusifs. Grom Agency - Agence de création de contenu UGC en France.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function UGCFrancePage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/documents/ugc-talents-france.pdf"
        className="w-full h-full border-0"
        title="Grom Agency - UGC Talents France"
      />
    </div>
  )
}
