import { useRouter } from 'next/router';

import Head from "next/head"
import styles from "../styles/Home.module.css"
 
import storyblokApi from "../lib/storyblok"
 
export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>
          { props.story ? props.story.name : 'My Site' }
        </h1>
      </header>
 
      <main>
      {console.log(props.story)}
      </main>
    </div>
  )
}

export async function getStaticPaths() {
const { data } = await storyblokApi?.get("cdn/links", {
  version:
    import.meta.env.PUBLIC_ENVIRONMENT === "development" ? "draft" : "published",
});
let links = data?.links;
links = Object.values(links);
return links?.map((link) => {
  return {
    params: {
      slug: link.slug === "home" ? undefined : link.slug,
    },
  };
});
}
 
export async function getStaticProps({ preview = false }) {
  let slug =`/blog/${slug === undefined ? "home" : slug}`
  let sbParams = {
    version: 'published'
  };
 
  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }
 
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, 
  };
}


const { slug } = Astro.params;








