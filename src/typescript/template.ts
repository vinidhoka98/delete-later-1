import { Action } from "./action"
import {
  Component,
  Banner,
  SectionProps,
  SectionWithBucket,
  FeaturedBlogData,
  ObjectProps,
  TeamProps,
  Widget,
  Card,
} from "./component"
import { Posts } from "./layout"

type PageData = {
  title: string
  uid: string
  locale: string
  page_components: Component[]
  hero_banner: Banner
  section: SectionProps
  section_with_buckets: SectionWithBucket
  from_blog: FeaturedBlogData
  section_with_cards: Card
  section_with_html_code: ObjectProps
  our_team: TeamProps
  widget: Widget
  call_to_action: Action
}

export type BlogPost = {
  nodes: [Posts]
}

type Data = {
  contentstackPage: PageData
  allContentstackBlogPost: BlogPost
  contentstackBlogPost: any
}

export type PageProps = {
  data: Data,
  pageContext: any
}
