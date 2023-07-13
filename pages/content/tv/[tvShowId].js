import { Fragment } from "react";
import Head from "next/head";
import Profile from "../../../components/profile-page/profile";
import {
  getAllContentIds,
  getDataWithId,
  getVideoWithId,
} from "../../../lib/movie-data";

export default function TvShowDetailPage({ data, contentId }) {
  return (
    <Fragment>
      <Head>
        <title>TV show - {data.name}</title>
        <meta name="description" content={data.overview} />
      </Head>
      <Profile data={data} type={"tv"} contentId={contentId} />
    </Fragment>
  );
}

// export async function getStaticPaths() {
//   const contentIdList = await getAllContentIds("tv");
//   const paths = contentIdList.map((id) => ({
//     params: { tvShowId: id },
//   }));

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps(context) {
  const contentId = context.params.tvShowId;
  const data = await getDataWithId("tv", contentId);
  const contentVideo = await getVideoWithId("tv", contentId);

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
