const express = require('express');
const path = require('path');
const app = express();

// 首页
app.get(
  '/',
  (req,res)=>{
    res.sendFile(path.join(__dirname, 'pages/index.html'))
  }
);

// 加载真实的文件
app.use(
  '/',
  express.static(path.join(__dirname, 'public'), {
    index: ['index.html', 'index.htm'],
  })
);
app.use(
  '/',
  express.static(path.join(__dirname, 'project'), {
    index: ['index.html', 'index.htm'],
  })
);

app.listen(3000);
