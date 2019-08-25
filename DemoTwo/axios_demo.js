var axios = require("axios")



function testDemo(){
    // Get 请求
    axios
        .get("http://127.0.0.1:3001/brands")
        .then((res)=>{
        console.log(res);
        const {status,data} = res;
        if(status == 200){
            console.log(data)
        }
        })
        .catch((err)=>{
            console.log(err);
        });
    // post 请求
    axios.post("http://127.0.0.1:3001/brands",{
        name:"abcdd",
        data: new Date()
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    });
    //put 方法 修改数据
    axios.put("http://127.0.0.1:3001/brands/20",{
        name:"dfdfdfd",
        data:new Date()
    }).then((res)=>{
        console.log(res);
    }).catch((res)=>{
        console.log(err);
    });
    // delete
    axios.delete("http://127.0.0.1:3001/brands/20").then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    });
}