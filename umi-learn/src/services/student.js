const appkey = '17596122336_1569677773123';

export async function getAllStudents() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then((res) => res.json())
        .then((res) => res.data);
}

export async function getStudentsByPage(page = 1, limit = 10) {
    return await fetch(
        `/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`
    )
        .then((res) => res.json())
        .then((res) => res.data);
}

export async function getSearchStudents({
    sex = -1,
    page = 1,
    limit = 10,
    key = ''
} = {}) {
    console.log(sex, page, limit, key);
    if (key) {
        const resp = await fetch(
            `/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&sex=${sex}&search=${key}`
        )
            .then((res) => res.json())
            .then((res) => res.data);
        console.log('结果1', resp);
        resp && (resp.datas = resp.searchList) && delete resp.searchList;
        console.log('结果', resp);
        return resp;
    } else {
        const resp = await getStudentsByPage(page, limit);

        resp && (resp.datas = resp.findByPage) && delete resp.findByPage;
        console.log('结果', resp);
        return resp;
    }
}
