import type { NextApiRequest, NextApiResponse } from 'next';
// import { getToken } from 'next-auth/jwt';

// const secret = process.env.NEXTAUTH_SECRET;
export const config = {
  api: {
    bodyParser: true,
  },
};
export default async function chattoken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log('hello');
  // const token = await getToken({ req, secret });
  // console.log('token1: ', token);
  // console.log('body: ', req.body);
  // let formData = JSON.parse(req.body)
  //   const object={}
  //   let data =  {
  //   name: '',
  //   organizer: '',
  //   description: '',
  //   location: '',
  //   date: '',
  //   duration: '',
  //   link: '',
  //   linkedin: '',
  //   twitter: '',
  //   logo: '',
  //   address: '{"isOnline":false,"location":""}',
  //   tags: '[]',
  //   speakers: '[{"name":"","profile":"","designation":"","socials":[{"name":"","link":""}]}]',
  //   sponsors: '[]'
  // }

  // formData.forEach(function(value,key){
  //   object[key]=value;
  // })
  // let data ="hola"
  // console.log(await req.formData())
  // const formDataFlag = new FormData(req.body)
  // console.log(formDataFlag)
  // console.log(req.body)
  // let data={data:req.body}
  try {
    const response = await fetch(
      (process.env.NEXT_PUBLIC_API_ENDPOINT as string) + '/api/events/create',
      {
        method: 'post',
        // body: JSON.stringify({data:req.body}),
        body: JSON.stringify(req.body),
        headers: {
          // Authorization: 'Bearer ' + token?.idToken,
          'Content-type': 'application/json',
          // 'Content-Type': 'multipart/form-data'
          // "content-type": "application/x-www-form-urlencoded",
        },
      }
    ).then((r) => {
      if (r.status === 500) {
        // console.log(r)
        throw 'Some error occurrend';
      }
      // console.log(r)
      return r.json();
    });
    res.status(200).json(response);
  } catch (error) {
    // console.log('error: ', error);
    res.status(500).json({ success: false, error: error });
  }
}
