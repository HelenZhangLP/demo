/*
  tools
  checkbox data
*/
function timeDate() {
  const DATE = new Date()
  let hour = DATE.getHours()
  let minutes = DATE.getMinutes()
  var times = [],text = '',i = 0, a,b;

  if (minutes >= 30) {
    hour += 1
    a = ":00"
    b =':30'
  } else {
    a = ':30'
    b = ":00"
  }

  do {
    if (i%2==0) {
      text = hour + a + '-' + hour + b
    } else {
      text = hour + b + '-' + (hour+1) + a
      hour++;
    }
    times.push(text)
    i++;
  } while (hour <= 23)

  return times;
}
/*
  render
  @ 参数1 模板 id
  @ 参数2 列表 id
*/
function renderPage(templWrap, elementWrap) {
  $.ajax({
      url: 'http://api.com/getList',
      dataType: 'json'
  }).done(function(data, status, xhr) {
      var {taskList} = data
      var nodeHTML = $('#'+templWrap).html();
      var t = _.template(nodeHTML)
      $('#'+elementWrap).append(t(data))
  });
}

function renderOptions(template,wrap) {
  var nodeHTML = $('#'+template).html();
  var t = _.template(nodeHTML);
  var timeList = timeDate()
  // t({}) 参数是一个对象
  $('#'+wrap).append(t({timeList}));
}

function Task() {}

Task.prototype.constructor = Task;

Task.prototype.newTask = function () {
  var node = document.createElement('div');
  node.setAttribute("class", "task")
  node.innerText = 'test 1';
  return node;
};
