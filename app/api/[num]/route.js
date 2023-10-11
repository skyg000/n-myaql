import {queryExrcute} from '../Db'


export async function DELETE(req,{params}) {
    console.log(params);
    await queryExrcute(`delete from member where num=?`,[params.num]);
    const data = await queryExrcute(`select * from member`);
    return Response.json(data);    
    }
export async function PUT(req,{params}) {
    const data =  await req.json()
    const q = await queryExrcute(`update member set name=? where num = ?`,[data.name,params.num]);
    const getData = await queryExrcute(`select * from member`);
    return Response.json(getData);    
    }