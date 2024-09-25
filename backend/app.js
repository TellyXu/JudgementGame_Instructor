const express = require('express');
const bodyParser = require('body-parser');
//const mysql = require('mysql');
const { Pool } = require('pg');
const cors = require('cors'); // 添加此行

const app = express();
app.use(cors()); // 添加此行，启用 CORS
app.use(bodyParser.json()); // 支持 JSON 编码的请求体
app.use(express.static('public')); // 从 'public' 目录提供静态文件

// 创建数据库连接池
//const pool = mysql.createPool({
//    host: 'forritu1.mysql.database.azure.com',
//    user: 'maxwell',
//    password: 'guztiw-3Fefqu-retnyv',
//    database: 'surveys',
//    ssl: {
//        rejectUnauthorized: true
//    }
//});

const pool = new Pool({

    host: 'dpg-crpgut3tq21c739acapg-a.virginia-postgres.render.com',
    port: 5432,
    user: 'survey_summary_user',
    password: 'e5ibAi4EBZPmIZkf2NSdOa7lHq0SPDAT',
    database: 'survey_summary',
    ssl: {
        rejectUnauthorized: true // This should be true to ensure secure connections
    }
});


// 测试数据库连接
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Database connected:', res.rows[0].now);
    }
});
// 提交问卷调查的路由
app.post('/submit', (req, res) => {
    console.log('接收到的数据:', req.body); // 记录接收到的数据
    const { survey_number = 1, version = 1, Q1, Q2, text_val } = req.body;

    // 将空字符串替换为默认值
    const values = [survey_number, version, parseInt(Q1, 10), parseInt(Q2, 10), text_val];

    const query = `INSERT INTO survey_summary (survey_num, version, q1_answer, q2_answer, text_val) VALUES ($1, $2, $3, $4, $5)`;
    pool.query(query, values, (error, results) => {
        if (error) {
            console.error('数据库查询错误:', error);
            return res.status(500).json({ error: '提交调查问卷时出错', details: error.message });
        }
        res.json({ message: '问卷调查提交成功！' });
    });
});

// 查询接口
app.post('/find', (req, res) => {
    const query = `SELECT * FROM survey_summary`;
    pool.query(query, (error, results) => {
        if (error) {
            console.error('查询错误:', error);
            return res.status(500).json({ error: '获取数据时出错', details: error.message });
        }
        console.log('result', results.rows); // 注意在 pg 中，返回的数据在 results.rows 中
        res.json({ code: 200, msg: 'success', data: results.rows });
    });
});

// 删除所有数据的路由
app.post('/deleteAll', (req, res) => {
    const query = 'DELETE FROM survey_summary';
    pool.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Failed to delete data', details: error.message });
        }
        res.json({ message: 'All data deleted successfully!' });
    });
});

// 服务器监听 8001 端口
const PORT = 8001;
app.listen(PORT, () => {
    console.log(`服务器正在端口 ${PORT} 上运行`);
});
