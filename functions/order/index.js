// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  const classCollection = db.collection('class');
  const _ = db.command;
  const classId = event.classId;
  const newList = event.newList;
  try {
    return await classCollection
      .doc(classId)
      .update({
        data: {
          list: _.set(newList)
        }
      })
  } catch (err) {
    console.error(err);
  }

}