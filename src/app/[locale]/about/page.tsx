import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.justbepatient.wiki'
  const path = '/about'

  return {
    title: 'About Just Be Patient Wiki - Your Visual Novel Resource',
    description: 'Learn about Just Be Patient Wiki, a community-driven resource hub providing comprehensive guides, ending walkthroughs, character info, and content warnings for the Just Be Patient psychological horror visual novel.',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Just Be Patient Wiki',
      title: 'About Just Be Patient Wiki',
      description: 'Learn about our mission to provide the best Just Be Patient visual novel resources and guides.',
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          alt: 'Just Be Patient Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Just Be Patient Wiki',
      description: 'Learn about our mission to provide the best Just Be Patient resources.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Just Be Patient Wiki
          </h1>
          <p className="text-slate-300 text-lg mb-2">
            Your community-driven resource center for Just Be Patient
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Welcome to Just Be Patient Wiki</h2>
            <p>
              Just Be Patient Wiki is an <strong>unofficial, fan-made resource website</strong> dedicated to helping players
              explore the psychological horror visual novel "Just Be Patient" by Hexed Honey. We are a community-driven
              platform that provides comprehensive guides, ending walkthroughs, choice and consequence breakdowns,
              character analysis, and content warnings to enhance your experience with the game.
            </p>
            <p>
              Whether you're a first-time player seeking guidance through the story or a completionist hunting for
              every ending, Just Be Patient Wiki is here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: <strong>to empower Just Be Patient players with accurate, up-to-date information
              and thoughtful analysis</strong> that helps them navigate the game's story and choices. We strive to:
            </p>
            <ul>
              <li><strong>Provide reliable information:</strong> Keep our content updated with accurate story details, endings, and character information</li>
              <li><strong>Offer clear guidance:</strong> Develop walkthroughs and choice guides that help players reach the endings they want</li>
              <li><strong>Prioritize safety:</strong> Maintain clear content warnings so players can make informed decisions about sensitive material</li>
              <li><strong>Stay accessible:</strong> Keep all resources free and easy to use for players of all backgrounds</li>
            </ul>

            <h2>Our Vision</h2>
            <p>
              We envision Just Be Patient Wiki as the <strong>go-to destination</strong> for every Just Be Patient player seeking
              to understand the game's narrative. We want to be the resource that players trust and rely on, whether they need
              ending guides, want to understand a character's motivations, or are looking for content warnings before playing.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎬</div>
              <h3 className="text-xl font-semibold text-white mb-2">Ending Guides</h3>
              <p className="text-slate-300">
                Comprehensive walkthroughs for every ending in Just Be Patient. Learn the choices and conditions
                needed to reach each conclusion of the story.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🧭</div>
              <h3 className="text-xl font-semibold text-white mb-2">Choice & Consequence</h3>
              <p className="text-slate-300">
                Detailed breakdowns of key decisions and their outcomes. Understand how each choice shapes
                the narrative and which path leads where.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🎭</div>
              <h3 className="text-xl font-semibold text-white mb-2">Character Analysis</h3>
              <p className="text-slate-300">
                In-depth information and analysis of the characters you encounter. Explore their motivations,
                backstories, and roles in the story.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">⚠️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Content Warnings</h3>
              <p className="text-slate-300">
                Clear trigger and content warnings so you can make informed decisions before engaging with
                sensitive or disturbing material in the game.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">💡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Tips & Insights</h3>
              <p className="text-slate-300">
                Gameplay tips, story insights, and analysis to deepen your understanding of the narrative
                and enhance your experience with the visual novel.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Multilingual Support</h3>
              <p className="text-slate-300">
                Content available in multiple languages including English, Spanish, Portuguese, French,
                German, Russian, Japanese, and Korean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Community-Driven</h2>
            <p>
              Just Be Patient Wiki is built <strong>by the community, for the community</strong>. We welcome contributions,
              feedback, and suggestions from players of all backgrounds. Our content is constantly evolving based on:
            </p>
            <ul>
              <li><strong>Player feedback:</strong> Your suggestions help us improve and expand our resources</li>
              <li><strong>Community discoveries:</strong> New interpretations, hidden details, and theories shared by players</li>
              <li><strong>Game updates:</strong> We monitor official updates and patches and adjust our content accordingly</li>
              <li><strong>Discussion:</strong> We track community discussions to refine our guides and analysis</li>
            </ul>
            <p>
              <strong>Want to contribute?</strong> Whether you've discovered a new ending, found a subtle story detail,
              or have suggestions for new guides, we'd love to hear from you! Reach out through our contact channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>About the Team</h2>
            <p>
              Just Be Patient Wiki is maintained by a dedicated team of passionate gamers and writers who love
              Just Be Patient as much as you do. We're players first, constantly exploring the story, analyzing
              choices, and staying updated with the latest discoveries.
            </p>
            <p>
              Our team combines expertise in:
            </p>
            <ul>
              <li><strong>Narrative analysis:</strong> Deep understanding of Just Be Patient's story, themes, and characters</li>
              <li><strong>Web development:</strong> Building fast, user-friendly tools and interfaces</li>
              <li><strong>Content creation:</strong> Writing clear, thoughtful guides and analysis</li>
              <li><strong>Community management:</strong> Listening to player feedback and fostering a positive environment</li>
            </ul>
            <p className="text-slate-400 italic text-sm">
              Project Codename: "Patience" – Exploring the story, one choice at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Important Disclaimer</h2>
            <p className="text-yellow-400/90">
              <strong>Just Be Patient Wiki is an unofficial fan-made website.</strong> We are NOT affiliated with,
              endorsed by, or associated with Hexed Honey, itch.io, or any official entities related to Just Be Patient.
            </p>
            <p>
              All game content, trademarks, characters, and assets are the property of their respective owners.
              We use game-related content under fair use principles for informational and educational purposes only.
            </p>
            <p>
              Just Be Patient Wiki is a non-profit, community resource created by fans, for fans.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have questions, suggestions, found a bug, or just want to say hi:
            </p>
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                <a href="mailto:contact@justbepatient.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contact@justbepatient.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Bug Reports</h3>
                <a href="mailto:support@justbepatient.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  support@justbepatient.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Content Submissions</h3>
                <a href="mailto:contribute@justbepatient.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  contribute@justbepatient.wiki
                </a>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                <a href="mailto:partnerships@justbepatient.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                  partnerships@justbepatient.wiki
                </a>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-950/30 to-rose-950/30 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest guides, tips, and Just Be Patient news.
            Bookmark this site and check back regularly for new content!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[hsl(var(--nav-theme-light))] text-white font-semibold hover:opacity-90 transition"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
