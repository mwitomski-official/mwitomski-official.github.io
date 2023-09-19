import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub:
        "https://github.com/mwitomski-official/mwitomski-official.github.io/blob/hugo/content",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  afterBody: [Component.Backlinks(), Component.Graph()],
  left: [Component.PageTitle(), Component.Darkmode(), Component.Search()],
  right: [Component.TableOfContents()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  afterBody: [Component.Backlinks()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}

// left: [
//   Component.PageTitle(),
//   Component.MobileOnly(Component.Spacer()),
//   Component.Search(),
//   Component.Darkmode(),
//   Component.DesktopOnly(Component.Explorer()),
// ],
// right: [Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],

// beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
// afterBody: [Component.Graph(), Component.Backlinks()],
// left: [
//   Component.PageTitle(),
//   Component.MobileOnly(Component.Spacer()),
//   Component.Search(),
//   Component.Darkmode(),
//   Component.DesktopOnly(Component.Explorer()),
// ],
// right: [Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],
