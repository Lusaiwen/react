const appkey = '17596122336_1569677773123';



export async function getAllStudents(){
    return await fetch(`/api/student/findAll?appkey=${appkey}`).then(res => res.json()).then(res => res.data);
}


export async function getStudentsByPage(page = 1, limit = 10){
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`).then(res => res.json()).then(res => res.data);
}
