# CLAUDE.md - AI Assistant Context for Interlay Wiki

This file provides context and instructions for AI assistants (like Claude) working on the Interlay Wiki project.

## Project Overview

**Project Name**: Interlay Wiki
**Purpose**: Internal documentation wiki for the Interlay AI platform
**Framework**: Nextra 3 (Next.js-based documentation framework)
**Status**: Development/Internal Use

This is an internal documentation site for developers working on the Interlay AI platform. It provides comprehensive documentation about the system architecture, components, APIs, and development practices.

## Technology Stack

- **Framework**: Nextra 3.0+ with nextra-theme-docs
- **Runtime**: Next.js 14+ with Pages Router
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 3.x
- **Package Manager**: npm
- **Node Version**: 18+ recommended

## Project Structure

```
interlay-wiki/
├── pages/                # Documentation pages (MDX files)
│   ├── _app.tsx         # Next.js App component
│   ├── _document.tsx    # Next.js Document component
│   ├── _meta.js         # Navigation configuration
│   ├── index.mdx        # Homepage
│   ├── getting-started/ # Getting started section
│   │   ├── _meta.js
│   │   ├── installation.mdx
│   │   ├── development-setup.mdx
│   │   └── architecture.mdx
│   └── core-concepts/   # Core concepts section
│       ├── _meta.js
│       └── memory-bank.mdx
├── public/              # Static assets
├── styles/             # Global styles
│   └── globals.css     # Global CSS with Tailwind directives
├── theme.config.tsx    # Nextra theme configuration
├── next.config.mjs     # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
└── .gitignore         # Git ignore rules
```

## Key Commands

```bash
# Install dependencies
npm install

# Run development server (port 3007)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Development Guidelines

### Adding New Documentation Pages

1. **Create MDX files** in the appropriate directory under `pages/`
2. **Update _meta.js** in the parent directory to add navigation entry
3. **Use MDX features**: Combine Markdown with JSX components
4. **Follow naming**: Use kebab-case for file names (e.g., `memory-types.mdx`)

### Navigation Structure (_meta.js files)

Each directory can have a `_meta.js` file that defines the navigation order and labels:

```javascript
export default {
  'page-name': 'Display Name',
  'another-page': 'Another Display Name'
}
```

**Important**: Only reference files that actually exist, or you'll get validation errors.

### MDX File Structure

```mdx
# Page Title

Brief description of the page content.

## Section Header

Content with **bold** and *italic* text.

### Subsection

- Bullet points
- With multiple items

\`\`\`javascript
// Code blocks with syntax highlighting
const example = "code";
\`\`\`

> Blockquotes for important notes
```

## Common Issues and Solutions

### Issue: "_meta file validation failed"
**Solution**: Ensure all keys in `_meta.js` files correspond to actual `.mdx` files in that directory.

### Issue: "Tailwind CSS v4 incompatibility"
**Solution**: Use Tailwind CSS v3.x (not v4) with Nextra 3. The project is configured for v3.4.x.

### Issue: "Port 3007 already in use"
**Solution**: Kill the process using port 3007 or change the port in package.json scripts.

## Configuration Files

### theme.config.tsx
Main Nextra theme configuration including:
- Site title and logo
- Navigation settings
- Footer content
- Search configuration
- Dark mode settings

### next.config.mjs
Next.js configuration with Nextra plugin:
- MDX support through Nextra
- Custom webpack configurations
- Environment variables

### tailwind.config.js
Tailwind CSS configuration:
- Content paths for purging
- Theme extensions
- Dark mode configuration

## Project Context

This wiki documents the **Interlay AI** platform, which is described as:
- "Memorize Everything, Automate Anything"
- Universal AI integration layer
- Transforms personal/business data into intelligent workflows
- Features three core pillars:
  1. Effortless Data Integration
  2. Context-Aware AI Intelligence
  3. Intelligent Automation

## Future Enhancements

### Planned: MCP (Model Context Protocol) Server Integration
The wiki is designed to eventually integrate with an MCP server, allowing AI assistants to:
- Query documentation programmatically
- Provide intelligent assistance to developers
- Access up-to-date information about the Interlay platform

## Deployment Notes

- **Development**: Run locally on port 3007
- **Production**: Not currently deployed (internal use only)
- **Environment Variables**: Store in `.env.local` (not tracked in git)

## Best Practices

1. **Keep Documentation Current**: Update docs alongside code changes
2. **Use Clear Examples**: Include code examples and use cases
3. **Organize Logically**: Group related topics in sections
4. **Write for Developers**: Target audience is internal development team
5. **Include Visuals**: Use diagrams and screenshots where helpful

## AI Assistant Instructions

When working on this project:

1. **Preserve Existing Structure**: Don't restructure without explicit request
2. **Follow Nextra Patterns**: Use Nextra 3 conventions and features
3. **Maintain Consistency**: Match existing documentation style
4. **Test Changes**: Verify the development server runs without errors
5. **Update Navigation**: Always update `_meta.js` when adding/removing pages
6. **Use Correct Versions**: Stick to the versions specified in package.json

## Related Projects

- **Main Application**: Located at `../interlay-ai`
- **Documentation Content**: Mirrors the main app's internal documentation

## Support and Resources

- [Nextra Documentation](https://nextra.site)
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

*Last Updated: November 2024*
*This file helps AI assistants understand and work with the Interlay Wiki project effectively.*