import request from '@/utils/request'

export default {

  //讲师列表（条件查询分页)
  getTeacherListPage(current,limit,teacherQuery){
    return request({
      url:`/eduService/teacher/pageTeacher/${current}/${limit}`,
      method:'post',
      //data表示将对象转换成json
      data: teacherQuery
    })
  },

  //删除讲师
  deleteTeacherById(id){
    return request({
      url:`/eduService/teacher/pageTeacher/${id}`,
      method:'delete',
    })
  },

  //添加讲师
  addTeacher(teacher){
    return request({
      url:`/eduService/teacher/addTeacher`,
      method:'post',
      //data表示将对象转换成json
      data: teacher
    })
  },

  //获取讲师信息
  getTeacherInfo(id){
    return request({
      url:`/eduService/teacher/getTeacher/${id}`,
      method:'get',
    })
  },

  //修改讲师
  updateTeacher(teacher){
    return request({
      url:`/eduService/teacher/updateTeacher`,
      method:'post',
      //data表示将对象转换成json
      data: teacher
    })
  }

}






