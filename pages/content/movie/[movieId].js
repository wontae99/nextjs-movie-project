import { Fragment } from "react";
import Head from "next/head";
import {
  getAllContentIds,
  getDataWithId,
  getVideoWithId,
} from "../../../lib/movie-data";

import Profile from "../../../components/profile-page/profile";

export default function MovieDetailPage({ data, contentId }) {
  return (
    <Fragment>
      <Head>
        <title>Movie - {data.title}</title>
        <meta name="description" content={data.overview} />
      </Head>
      <Profile data={data} type={"movie"} contentId={contentId} />
    </Fragment>
  );
}

// export async function getStaticPaths() {
//   const contentIdList = await getAllContentIds("movie");
//   const paths = contentIdList.map((id) => ({
//     params: { movieId: id },
//   }));

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps(context) {
  const contentId = context.params.movieId;
  const data = await getDataWithId("movie", contentId);
  const contentVideo = await getVideoWithId("movie", contentId);

  if (contentVideo) {
    data.videoData = contentVideo;
  }

  return {
    props: {
      data: data,
      contentId,
    },
  };
}
