import { CONFIG } from "../../site.config"
import Head from "next/head"

export type MetaConfigProps = {
  title: string
  description: string
  type: "Website" | "Post" | "Page" | string
  pubDate?: string
  heroImage?: string
  url: string
  author: string
  profilePicture: string
}

const MetaConfig: React.FC<MetaConfigProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="robots" content="follow, index" />
      <meta charSet="UTF-8" />
      <meta name="description" content={props.description} />
      {/* twitter */}
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.heroImage && <meta name="twitter:image" content={props.heroImage} />}

      {/* og */}
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      {CONFIG.lang && <meta property="og:locale" content={CONFIG.lang} />}
      {props.heroImage && <meta property="og:image" content={props.heroImage} />}

      {/* post */}
      {props.type === "Post" && (
        <>
          <meta property="article:published_time" content={props.pubDate} />
          <meta property="article:author" content={props.author} />
        </>
      )}
    </Head>
  )
}

export default MetaConfig
