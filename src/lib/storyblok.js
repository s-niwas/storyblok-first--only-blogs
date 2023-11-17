import { storyblokInit, apiPlugin } from "@storyblok/js";
 
const { storyblokApi } = storyblokInit({
  accessToken: "830bmc6o3NpnJU9PnhGCywtt",
  use: [apiPlugin],
});

export default storyblokApi;
// import { StoryblokClient } from "storyblok-js-client";

// const Storyblok = new StoryblokClient({
//     accessToken: '830bmc6o3NpnJU9PnhGCywtt',
//     cache: {
//       clear: 'auto',
//       type: 'memory'
//     }
//   })

//   export default Storyblok;