import Mock from 'mockjs';

const result = Mock.mock({
  msg: '查询成功',
  status: 'success',
  'data|100': [
    {
      name: '@cname',
      city: '@city',
      appkey: /demo\d{2}_\d{10}/,
      'birth|1990-2010': 0,
      'ctime|32343545354-33343545354': 0,
      email: '@email',
      'id|+1': 1,
      phone: /1\d{10}/,
      Sno: /\d{5}/,
      'sex|1': [0, 1]
    }
  ]
});

export default {
  'GET /api/student/findAll': {
    msg: '查询成功',
    status: 'success',
    data: result
  }
};
