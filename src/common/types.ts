import {
  Banner,
  SectionProps,
  SectionWithBucket,
  FeaturedBlogData,
  ObjectProps,
  TeamProps,
  Widget,
  Card,
} from "../typescript/component"
import { Action } from "../typescript/action"

export interface PageModel {
  locale: string
  uid: string
  page_components: any
  seo: {
    meta_title: string
    meta_description: string
    keywords: string
    enable_search_indexing: boolean
  }
  tags: []
  title: string
  url: string
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

export interface BlogPostModel {
  locale: string
  uid: string
  author: Author
  body: string
  date: string
  featured_image: FeaturedImage
  is_archived: boolean
  related_post: RelatedPost
  seo: object
  tags: string[]
  title: string
  url: string
}

export interface HeaderModel {
  locale: string
  uid: string
  logo: {
    is_dir: boolean
    uid: string
    content_type: string
    description: string
    file_size: string
    filename: string
    parent_uid: string
    tags: string[]
    title: string
    url: string
  }
  navigation_menu: any
  notification_bar: any[]
}

export interface FooterModel {
  locale: string
  uid: string
  copyright: string
  logo: {
    is_dir: boolean
    uid: string
    content_type: string
    description: string
    file_size: string
    filename: string
    parent_uid: string
    tags: any[]
    title: string
    url: string
  }
  navigation: {
    link: any
  }
}

export interface EntryResponse {
  locale: string
  uid: string
  author: Author[]
  body: string
  date: string
  featured_image: FeaturedImage
  is_archived: boolean
  related_post: RelatedPost[]
}

export interface Author {
  uid: string
  _content_type_uid: string
}

export interface FeaturedImage {
  is_dir: boolean
  uid: string
  content_type: string
  description: string
  file_size: string
  filename: string
  parent_uid: string
  tags: string[]
  title: string
  url: string
}

export interface RelatedPost {
  locale: string
  uid: string
  author: Author[]
  body: string
  date: string
  featured_image: FeaturedImage
  is_archived: boolean
  related_post: {
    uid: string
    _content_type_uid: string
  }[]
  seo: {
    meta_title: string
    meta_description: string
    keywords: string
    enable_search_indexing: boolean
  }
  tags: string[]
  title: string
  url: string
  _content_type_uid: string
}
export interface EntryParams {
  contentTypeUid: string
  entryUrl?: string
  referenceFieldPath: string[] | undefined
  jsonRtePath: string[] | undefined
}
