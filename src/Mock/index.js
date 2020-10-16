import Mock from 'mockjs'

Mock.mock('/api/list',{
    code:200,
    'data|10':[{
        'name':'@cname(3,4)',
        'img':'@image(100x100,@color,@city)',
        'msg':'@ctitle(5,10)',
        'id':'@id'
    }]
})