// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let { OPENID } = cloud.getWXContext();
  const db = cloud.database();
  const classCollection = db.collection('class');
  try {
    return await classCollection.add({
      data: {
        title: event.title,
        list: event.list,
        openId: OPENID,
        createdAt: new Date()
      }
    })
  } catch (e) {
    console.error(e);
  }
}