# Interlay AI Internal Wiki

Internal documentation for the Interlay AI platform - "Memorize Everything, Automate Anything"

## 🚀 Quick Start

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

The wiki will be available at http://localhost:3007

## 📚 Documentation Structure

- **Getting Started**: Installation, setup, and architecture overview
- **Core Concepts**: Memory Bank, Memory Types, Automation Flows, AI Integration
- **Components**: UI component documentation with examples
- **API Reference**: tRPC routers and REST endpoints
- **Integrations**: Gmail, Discord, Clerk, and other services
- **Services**: Microservices documentation
- **Guides**: How-to guides and best practices

## 🛠 Technology Stack

- **Nextra**: Documentation framework built on Next.js
- **MDX**: Markdown with React components
- **TypeScript**: Type-safe development
- **Mermaid**: Architecture diagrams
- **Shiki**: Syntax highlighting

## ✏️ Contributing

### Adding Documentation

1. Create `.mdx` files in the appropriate `pages/` subdirectory
2. Update `_meta.json` files for navigation
3. Use MDX to embed React components for interactive examples

### MDX Components Available

- `Tabs` and `Tab` for tabbed content
- `Callout` for important notes
- `Card` and `Cards` for feature grids
- Code blocks with syntax highlighting
- Mermaid diagrams

### Example MDX Page

```mdx
import { Callout, Tabs, Tab } from 'nextra/components'

# Page Title

<Callout type="info">
  Important information here
</Callout>

<Tabs items={['Tab 1', 'Tab 2']}>
  <Tab>
    Content for tab 1
  </Tab>
  <Tab>
    Content for tab 2
  </Tab>
</Tabs>
```

## 🤖 MCP (Model Context Protocol) Compatibility

This wiki is designed to be MCP-compatible for future AI assistant integration:

- Structured markdown format for easy parsing
- Semantic organization of content
- Metadata tags for categorization
- Standardized code examples

## 📝 Notes

- This is internal documentation - do not share publicly
- Keep examples up to date with the main codebase
- Document new features as they're developed
- Use clear, concise language

## 🔗 Links

- [Main Repository](https://github.com/yourusername/interlay-ai)
- [Production App](https://app.interlay.ai)
- [Issue Tracker](https://github.com/yourusername/interlay-ai/issues)

---

Built with ❤️ by the Interlay AI team