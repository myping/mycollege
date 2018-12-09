import Mock from 'mockjs'
var data = Mock.mock('/api/users', (req, res) => {
    return {
        "user|1-10": [{
            'name': '@cname',
        }]
    }
})

console.log()