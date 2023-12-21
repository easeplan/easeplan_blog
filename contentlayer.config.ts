// import { defineDocumentType, makeSource } from "contentlayer/source-files";

// export const Post = defineDocumentType(() => ({
//   name: "Post",
//   filePathPattern: `**/*.md`,
//   fields: {
//     title: { type: "string", required: true },
//     author: { type: "string", required: true },
//     profilePicture: { type: "string" },
//     authorBio: { type: "string", required: true },
//     description: { type: "string", required: true },
//     heroImage: { type: "string", required: true },
//     // readTimeInMinutes: { type: "number", required: true },
//     pubDate: { type: "date", required: true },
//   },
//   computedFields: {
//     slug: {
//       type: "string",
//       resolve: (post) => {
//         const parts = post._raw.flattenedPath.split("/");
//         return parts[parts.length - 1];
//       },
//     },
//     url: {
//       type: "string",
//       resolve: (post) => {
//         const parts = post._raw.flattenedPath.split("/");
//         const slug = parts[parts.length - 1];
//         return `/posts/${slug}`;
//       },
//     },
//   },
// }));

// export default makeSource({
//   contentDirPath: "posts",
//   documentTypes: [Post],
// });
