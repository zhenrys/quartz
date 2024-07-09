import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { defineComponent, h, onMounted } from 'vue';
import Valine from 'valine';


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
	"Back to Zhenry's foundation":"https://zhenrys.github.io",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}


export default defineComponent({
  setup() {
    onMounted(() => {
      new Valine({
        el: '#vcomments', // 挂载Valine的容器ID
        appId: 'dEUw9Q5hFYMJDGoUErRAtD7V-gzGzoHsz',
        appKey: 'CRsrs1NovZnoOopOTQRSBu6J',
        placeholder: '在这里输入评论...',
        path: window.location.pathname, // 使用当前页面的路径作为评论的唯一标识
      });
    });

    return () => h('div', { class: 'layout' }, [
      h('header', { class: 'header' }, 'Header Content'),
      h('div', { class: 'container' }, [
        h('aside', { class: 'sidebar' }, 'Sidebar Content'),
        h('main', { class: 'main' }, [
          h('div', {}, 'Main Content'),
          h('div', { id: 'vcomments' }), // Valine评论系统的挂载点
        ]),
      ]),
      h('footer', { class: 'footer' }, 'Footer Content'),
    ]);
  },
});