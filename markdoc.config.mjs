import { component, defineMarkdocConfig, Markdoc, nodes } from '@astrojs/markdoc/config';

const { Tag } = Markdoc;

export default defineMarkdocConfig({
  tags: {
    details: {
      render: 'details',
      children: nodes.document.children,
    },
    summary: {
      render: 'summary',
      children: nodes.document.children,
    },
    sup: {
      render: 'sup',
      children: nodes.strong.children,
    },
    sub: {
      render: 'sub',
      children: nodes.strong.children,
    },
    abbr: {
      render: 'abbr',
      attributes: {
        title: { type: String },
      },
      children: nodes.strong.children,
    },
    kbd: {
      render: 'kbd',
      children: nodes.strong.children,
    },
    mark: {
      render: 'mark',
      children: nodes.strong.children,
    },
    youtube: {
      render: component('./src/components/YouTubeEmbed.astro'),
      attributes: {
        url: { type: String, required: true },
        label: { type: String, required: true },
      },
      selfClosing: true,
    },
    tweet: {
      render: component('./src/components/TweetEmbed.astro'),
      attributes: {
        url: { type: String, required: true },
      },
      selfClosing: true,
    },
    codepen: {
      render: component('./src/components/CodePenEmbed.astro'),
      attributes: {
        url: { type: String, required: true },
        title: { type: String, required: true },
      },
      selfClosing: true,
    },
    githubgist: {
      render: component('./src/components/GitHubGistEmbed.astro'),
      attributes: {
        id: { type: String, required: true },
      },
      selfClosing: true,
    },
  },
  nodes: {
    heading: {
      render: component('./src/components/Heading.astro'),
      attributes: {
        level: { type: Number, required: true },
      },
    },
    fence: {
      render: component('./src/components/CodeBlock.astro'),
      attributes: {
        content: { type: String, render: false, required: true },
        language: { type: String, default: 'typescript' },
        process: { type: Boolean, render: false, default: false },
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);
        if (children.some(child => typeof child !== 'string')) {
          throw new Error(
            `unexpected non-string child of code block from ${node.location?.file ?? '(unknown file)'}:${node.location?.start.line ?? '(unknown line)'}`,
          );
        }
        const render = config.nodes?.fence?.render ?? this.render;
        return new Tag(render, { ...attributes, content: children.join('') }, []);
      },
    },
  },
});
