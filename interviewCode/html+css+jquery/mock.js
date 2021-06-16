
Mock.mock('http://api.com/getList', {
  "taskList|1-3": [{
      'id|+1': 0,
      'tasks|1-3': [{
        'task': '@cname',   //中文名称
        'time': '@date("yyyy-MM-dd")',  //日期
      }]
  }]
});
