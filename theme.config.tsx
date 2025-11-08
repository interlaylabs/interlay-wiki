import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Interlay AI Documentation</span>,
  project: {
    link: 'https://github.com/yourusername/interlay-ai',
  },
  docsRepositoryBase: 'https://github.com/yourusername/interlay-wiki',
  footer: {
    text: 'Interlay AI Internal Documentation © 2024',
  },
  primaryHue: 200,
  primarySaturation: 100,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Interlay AI Documentation" />
      <meta property="og:description" content="Internal documentation for Interlay AI - Memorize Everything, Automate Anything" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Interlay AI Docs'
    }
  },
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    title: 'On This Page',
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page →',
  },
  search: {
    placeholder: 'Search documentation...',
  },
  banner: {
    key: 'internal-wiki',
    text: '🔒 Internal Documentation - Not for public distribution',
  },
}

export default config