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

## 🔄 Keeping Documentation in Sync

This wiki should be kept synchronized with the main Interlay AI application codebase. Follow these guidelines to ensure documentation stays current.

### Automated Synchronization

#### Option 1: Git Hooks
Set up a pre-commit hook in your main application to remind developers to update docs:

```bash
# In your main app's .git/hooks/pre-commit
#!/bin/bash
echo "📚 Remember to update the wiki documentation if you've made changes to:"
echo "   - Component interfaces"
echo "   - API endpoints"
echo "   - Core concepts"
echo "   - Integration configurations"
```

#### Option 2: CI/CD Pipeline
Add a documentation sync step to your CI/CD pipeline:

```yaml
# Example GitHub Action
- name: Sync Documentation
  run: |
    npm run docs:generate
    cp -r ./docs/generated/* ../interlay-wiki/pages/
```

#### Option 3: Documentation Generation Scripts
Create scripts to extract documentation from your codebase:

```bash
# scripts/sync-docs.sh
#!/bin/bash

# Extract TypeScript/JSDoc comments
npx typedoc --json ../interlay-wiki/api-docs.json

# Copy component documentation
cp -r src/components/README.md ../interlay-wiki/pages/components/

# Extract tRPC router documentation
node scripts/extract-api-docs.js > ../interlay-wiki/pages/api-reference/routers.mdx
```

### Manual Synchronization Workflow

#### 1. Regular Review Schedule
- **Weekly**: Review recent PRs for documentation needs
- **Monthly**: Full documentation audit
- **Quarterly**: Architecture and high-level documentation review

#### 2. Documentation Checklist for New Features
When adding features to the main app, update the wiki:

- [ ] Component documentation (if UI components added)
- [ ] API endpoint documentation (if new routes added)
- [ ] Integration guides (if new services integrated)
- [ ] Update architecture diagrams
- [ ] Add code examples
- [ ] Update troubleshooting guide if needed

#### 3. Sync Commands
Add these helpful commands to your package.json:

```json
{
  "scripts": {
    "docs:sync": "node scripts/sync-docs.js",
    "docs:check": "node scripts/check-docs-coverage.js",
    "docs:generate-api": "typedoc --out ../interlay-wiki/pages/api-generated"
  }
}
```

### Best Practices

#### Version Tagging
- Tag wiki updates with main app version numbers
- Maintain a CHANGELOG.md in the wiki
- Use git tags to mark major documentation updates

#### Documentation-Driven Development
1. Update wiki documentation BEFORE implementing features
2. Use documentation as specification
3. Review documentation in PR process

#### Team Responsibilities
- **Feature Developer**: Update relevant section when adding features
- **Tech Lead**: Review documentation completeness
- **Team Lead**: Ensure documentation standards are met

### Quick Sync Guide

```bash
# 1. Navigate to main app
cd ../interlay-ai

# 2. Generate latest documentation
npm run docs:generate

# 3. Copy to wiki
cp -r docs/generated/* ../interlay-wiki/pages/

# 4. Navigate to wiki
cd ../interlay-wiki

# 5. Review changes
git status

# 6. Commit documentation updates
git add .
git commit -m "docs: sync with main app v1.2.3"
```

### Documentation Sources

Keep these locations in sync:

| Main App Location | Wiki Location | Content Type |
|------------------|---------------|--------------|
| `/src/components/*/README.md` | `/pages/components/` | Component docs |
| `/src/server/api/routers/*` | `/pages/api-reference/` | API documentation |
| `/docs/architecture/*` | `/pages/getting-started/architecture.mdx` | Architecture |
| `/src/integrations/*/docs.md` | `/pages/integrations/` | Integration guides |
| `/services/*/README.md` | `/pages/services/` | Service documentation |

### Monitoring Documentation Health

Use these metrics to ensure documentation quality:

- **Coverage**: % of components/APIs documented
- **Freshness**: Days since last update
- **Completeness**: Required sections present
- **Examples**: Code examples provided
- **Accuracy**: Documentation matches implementation

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