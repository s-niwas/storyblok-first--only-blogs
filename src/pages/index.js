import Head from "next/head"
import storyblokApi from "../lib/storyblok"
 
export default function Home(props) {
  return (
    <div >
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

      </main>
    </div>
  )
}
 
export async function getStaticProps({ preview = false }) {
  let slug = "home";
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

// const { data } = await storyblokApi.get("cdn/stories/home", {
//     version: "draft"
//   })
//   const story = data.story

