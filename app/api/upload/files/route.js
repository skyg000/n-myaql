import {queryExrcute} from '../../Db'

export async function GET(){
    const q = `select * from files`
    const data = await queryExrcute(q)
    return Response.json(data);
}
export async function POST(req){
    const {title,imgUrl}= await req.json()
    const q = `insert into files (title,imgUrl) values (?,?)`
    await queryExrcute(q, [title,imgUrl])
    return Response.json({done:'성공!'});
    // const imgUrl =  req.nextUrl.searchParams.get('imgUrl')
}