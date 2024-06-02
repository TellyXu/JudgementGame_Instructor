const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // 添加此行

const app = express();
app.use(cors()); // 添加此行，启用 CORS
app.use(bodyParser.json()); // 支持 JSON 编码的请求体
app.use(express.static('public')); // 从 'public' 目录提供静态文件

// 创建数据库连接池
const pool = mysql.createPool({
    host: 'forritu1.mysql.database.azure.com',
    user: 'maxwell',
    password: 'guztiw-3Fefqu-retnyv',
    database: 'surveys',
    ssl: {
        rejectUnauthorized: true
    }
});

// 测试数据库连接
pool.getConnection((err, connection) => {
    if (err) {
        console.error('数据库连接错误:', err);
        return;
    }
    console.log('数据库连接成功');
    connection.release();
});

// 提交问卷调查的路由
app.post('/submit', (req, res) => {
    console.log('接收到的数据:', req.body); // 记录接收到的数据
    const { survey_number = 1, version = 1, Q1, Q2, text_val } = req.body;

    // 将空字符串替换为默认值
    const values = [survey_number, version, parseInt(Q1, 10), parseInt(Q2, 10), text_val];

    const query = `INSERT INTO survey_summary (survey_num, version, Q1_Answer, Q2_Answer, text_val) VALUES (?, ?, ?, ?, ?)`;
    pool.query(query, values, (error, results) => {
        if (error) {
            console.error('数据库查询错误:', error);
            return res.status(500).json({ error: '提交调查问卷时出错', details: error.message });
        }
        res.json({ message: '问卷调查提交成功！' });
    });
});

// 查询接口
// 提交问卷调查的路由
app.post('/find', (req, res) => {
    const query = `SELECT * FROM survey_summary`;
    pool.query(query, (error, results) => {
        console.log('result', results)
        return res.json({ code: 200, msg: 'success', data: results })
    });
});

// 服务器监听 8001 端口
const PORT = 8001;
app.listen(PORT, () => {
    console.log(`服务器正在端口 ${PORT} 上运行`);
});
