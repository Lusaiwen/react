const appkey = '17596122336_1569677773123';

export async function getAllStudents() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then((res) => res.json())
        .then((res) => res.data);
}

export async function getStudentsByPage(page = 1, size = 10) {
    return await fetch(
        `/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`
    )
        .then((res) => res.json())
        .then((res) => res.data);
}

///api/student/searchStudent

export async function getSearchStudents({
    sex = -1,
    page = 1,
    size = 10,
    search = '',
} = {}) {
    console.log(search);
    if (search) {
        const resp = await fetch(
            `/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}&sex=${sex}&search=${search}`
        )
            .then((res) => res.json())
            .then((res) => res.data);
        resp && (resp.datas = resp.findByPage) && delete resp.findByPage;
        console.log(resp);
        return resp;
    } else {
        const resp = await getStudentsByPage((page = 1), (size = 10));
        resp && (resp.datas = resp.findByPage) && delete resp.findByPage;
        return resp;
    }
}
