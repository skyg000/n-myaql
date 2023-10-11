import {queryExrcute} from './Db'

export async  function POST(req) {
    const {name,email,id} = await req.json()
    const data = await queryExrcute(`insert into member(id,name,email)values(?,?,?)`,[id,name,email]);
        /* ㄴ value값에 넣을 값이 있다면 ? 로 -> [배열형태로]항목 입력해줘야함 */
    return Response.json([]);
}


    
    
export async function GET() {
    const data = await queryExrcute('SELECT * from member');
    return Response.json(data);    
    }








    /* const data = await queryExrcute('SELECT * from member');
        ㄴ 입력된 값을 찾는 명령어   */
    /* const data = await queryExrcute(`insert into member(id,name,email)values('aaa','홍홍홍','skyg0@gmail.com')`); 
        ㄴ 값을 추가하는 명령어 */
    /* const data = await queryExrcute(`update member set name='홍석현' where num = 5`);  
        ㄴ 원하는 값을 바꿀 때 쓰는 명령어 */
    /* const data = await queryExrcute(`delete from member`);  
        ㄴ 삭제하는 명령어 */
    /* const data = await queryExrcute(`create table contact(name varchar(30),email varchar(30), contents text, num int not null auto_increment, primary key(num))`);
       ㄴ 테이블 생성 하는 명령어 */
    /* const data = await queryExrcute(`drop table contact`); 
        ㄴ 만든 테이블 삭제시키는 명령어 */