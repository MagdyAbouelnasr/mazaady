
// export async function GET(request: Request){
//     try {
//             const response = await fetch(
//               "https://staging.mazaady.com/api/v1/get_all_cats",
//               {
//                 headers: {
//                   Authorization: `private-key ${process.env.PRIVATE_KEY}`,
//                 },
//               }
//             );
//             const data = await response.json();
//             return new Response(JSON.stringify(data), {
//                 headers: {
//                     "Content-Type": 'application/json'
//                 }
//             })
//     } catch (error) {
//         return new Response(JSON.stringify(null))
//     }
// }


// pages/api/myapi.js
export default async function handler(req: any, res: any) {
  try {
    const response = await fetch('https://staging.mazaady.com/api/v1/get_all_cats', {
      headers: {
        'Authorization': `Bearer ${process.env.PRIVATE_KEY}`
      }
    });
    const data = await response.json();
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
