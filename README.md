定时任务使用的是 node-schedule,非常简单易用的一个 nodejs 库。

```javascript
function crontab() {
  schedule.scheduleJob(`00 00 18 * * *`, mainTask);
}
// 任务
function mainTask(){...}
```

origin string 可选
"zhihu" 、 "163" 、"readhub" 切换源
