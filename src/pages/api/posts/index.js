import React from 'react';

// export default async (req, res) => {
//     try {
//         const { postBody } = req.body;
//         const posts = await firestore.collection("Posts").get();
//         const postsData = await posts.docs.map(entry => entry.data());
//         console.log(postsData, "in the posts api call")
//         res.status(200).json({ id });
//         if (postsData.some(entry => { entry.postBody === postBody })) {
//             res.status(400).end();
//         } else {
//             const { id } = await firestore.collection("Posts").add({
//                 ...req.body,
//                 created: new Date().toISOString(),
//             });
//         };
//     }
//     catch (e) {
//         res.status(400).end()
//     };
// };