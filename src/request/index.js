//第一版自己封装的请求
// export function myrequest(option) {
//     return wx.request({
//         url: option.url,
//         method: option.method || 'GET',
//         header: option.headerheader || 'conent-type',
//         dataType: option.dataType || 'json',
//         data: option.data || {},
//         success: function (res) {
//             option.succ(res)
//         },
//         fail: function (err) {
//             console.log(err);
//         }
//     })
// }

//第二版封装的请求
//设置一个请求的基地址
let URL = "http://huangjiangjun.top:9001/movie"
export function myrequest(option) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: URL + option.url,
            method: option.method || 'GET',
            header: option.headerheader || 'conent-type',
            dataType: option.dataType || 'json',
            data: option.data || {},
            success: function (res) {
                resolve(res)
            },
            fail: function (err) {
                reject(err)
            }
        })
    })

}

