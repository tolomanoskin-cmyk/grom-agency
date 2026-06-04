import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const {
      email,
      language,
      platform,
      contentType,
      instagramFollowers,
      tiktokFollowers,
      views,
      likes,
      comments,
      shares,
      saves,
      ugc,
      usageRights,
      currency,
    } = data

    // Build email content
    const subject = language === 'fr' 
      ? `Nouvelle demande de devis Gromkulator - ${email}`
      : language === 'rs'
      ? `Novi zahtev za ponudu Gromkulator - ${email}`
      : `New Gromkulator Quote Request - ${email}`

    const body = language === 'fr'
      ? `
Nouvelle demande de devis du Gromkulator

Email du client: ${email}

--- CONFIGURATION CAMPAGNE ---

Plateforme: ${platform === 'instagram' ? 'Instagram' : 'TikTok'}
Type de contenu: ${contentType}
Abonnés Instagram: ${instagramFollowers?.toLocaleString() || 'N/A'}
Abonnés TikTok: ${tiktokFollowers?.toLocaleString() || 'N/A'}

--- PERFORMANCE ESTIMÉE ---

Vues: ${views?.toLocaleString() || 'N/A'}
Likes: ${likes?.toLocaleString() || 'N/A'}
Commentaires: ${comments?.toLocaleString() || 'N/A'}
Partages: ${shares?.toLocaleString() || 'N/A'}
Sauvegardes: ${saves?.toLocaleString() || 'N/A'}

--- OPTIONS ---

UGC: ${ugc}
Droits d'utilisation: ${usageRights}
Devise: ${currency}
`
      : language === 'rs'
      ? `
Novi zahtev za ponudu sa Gromkulatora

Email klijenta: ${email}

--- KONFIGURACIJA KAMPANJE ---

Platforma: ${platform === 'instagram' ? 'Instagram' : 'TikTok'}
Tip sadržaja: ${contentType}
Instagram pratioci: ${instagramFollowers?.toLocaleString() || 'N/A'}
TikTok pratioci: ${tiktokFollowers?.toLocaleString() || 'N/A'}

--- PROCENJENA PERFORMANSA ---

Pregledi: ${views?.toLocaleString() || 'N/A'}
Lajkovi: ${likes?.toLocaleString() || 'N/A'}
Komentari: ${comments?.toLocaleString() || 'N/A'}
Deljenja: ${shares?.toLocaleString() || 'N/A'}
Sačuvano: ${saves?.toLocaleString() || 'N/A'}

--- OPCIJE ---

UGC: ${ugc}
Prava korišćenja: ${usageRights}
Valuta: ${currency}
`
      : `
New Gromkulator Quote Request

Client Email: ${email}

--- CAMPAIGN CONFIGURATION ---

Platform: ${platform === 'instagram' ? 'Instagram' : 'TikTok'}
Content Type: ${contentType}
Instagram Followers: ${instagramFollowers?.toLocaleString() || 'N/A'}
TikTok Followers: ${tiktokFollowers?.toLocaleString() || 'N/A'}

--- ESTIMATED PERFORMANCE ---

Views: ${views?.toLocaleString() || 'N/A'}
Likes: ${likes?.toLocaleString() || 'N/A'}
Comments: ${comments?.toLocaleString() || 'N/A'}
Shares: ${shares?.toLocaleString() || 'N/A'}
Saves: ${saves?.toLocaleString() || 'N/A'}

--- OPTIONS ---

UGC: ${ugc}
Usage Rights: ${usageRights}
Currency: ${currency}
`

    // Send email using Resend or another service
    // For now, we'll use a simple fetch to a webhook or log it
    // You can integrate Resend, SendGrid, or another email service here
    
    // Option 1: If you have Resend API key
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Gromkulator <noreply@grom-agency.com>',
          to: ['contact@grom-agency.com'],
          reply_to: email,
          subject: subject,
          text: body,
        }),
      })

      if (!resendResponse.ok) {
        throw new Error('Failed to send email via Resend')
      }
    } else {
      // Fallback: Log the request (for development/testing)
      console.log('Quote Request:', { email, subject, body })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quote API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}
