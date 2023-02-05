
# zhihu



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [用户](#)
    1. [用户注册](#1-)
        * [用户注册](#i-example-request-)
    1. [用户登录](#2-)
        * [用户登录](#i-example-request--1)
    1. [修改用户信息](#3-)
        * [修改用户信息](#i-example-request--2)
    1. [获取指定用户](#4-)
        * [获取指定用户](#i-example-request--3)
    1. [获取所有用户](#5-)
        * [获取所有用户](#i-example-request--4)
    1. [删除用户](#6-)
        * [删除用户](#i-example-request--5)
* [文件上传](#)
    1. [文件上传](#1--1)
        * [文件上传](#i-example-request--6)
* [个人资料](#)
    1. [修改个人资料](#1--2)
* [关注](#)
    1. [获取关注列表](#1--3)
        * [获取关注列表](#i-example-request--7)
    1. [关注](#2--1)
        * [关注](#i-example-request--8)
    1. [取消关注](#3--1)
        * [取消关注](#i-example-request--9)
    1. [获取用户粉丝列表](#4--1)
        * [获取用户粉丝列表](#i-example-request--10)
* [话题接口](#)
    1. [创建话题](#1--4)
        * [创建话题](#i-example-request--11)
    1. [查询话题列表](#2--2)
        * [查询话题列表](#i-example-request--12)
    1. [查询指定话题](#3--2)
        * [查询指定话题](#i-example-request--13)
    1. [更新话题](#4--2)
        * [更新话题](#i-example-request--14)
    1. [关注话题](#5--1)
        * [关注话题](#i-example-request--15)
    1. [取消关注话题](#6--1)
        * [取消关注话题](#i-example-request--16)
    1. [获取某人关注话题列表](#7-)
        * [获取某人关注话题列表](#i-example-request--17)
    1. [话题的粉丝](#8-)
        * [话题的粉丝](#i-example-request--18)
* [问题接口](#)
    1. [新增问题](#1--5)
        * [新增问题](#i-example-request--19)
    1. [获取问题列表](#2--3)
        * [获取问题列表](#i-example-request--20)
    1. [查询指定问题](#3--3)
        * [查询指定问题](#i-example-request--21)
    1. [修改问题](#4--3)
        * [修改问题](#i-example-request--22)
    1. [删除问题](#5--2)
        * [删除问题](#i-example-request--23)
    1. [用户的问题列表](#6--2)
        * [用户的问题列表](#i-example-request--24)
    1. [话题的问题](#7--1)
        * [话题的问题](#i-example-request--25)
* [文章](#)
    1. [获取文章列表](#1--6)
        * [获取文章列表](#i-example-request--26)
    1. [获取指定文章](#2--4)
        * [获取指定文章](#i-example-request--27)
    1. [新增文章](#3--4)
        * [新增文章](#i-example-request--28)
    1. [编辑文章](#4--4)
        * [编辑文章](#i-example-request--29)
    1. [删除文章](#5--3)
        * [删除文章](#i-example-request--30)
* [文章分类](#)
    1. [获取分类列表](#1--7)
        * [获取分类列表](#i-example-request--31)
    1. [获取指定分类](#2--5)
        * [获取指定分类](#i-example-request--32)
    1. [新增文章分类](#3--5)
        * [新增文章分类](#i-example-request--33)
    1. [更新分类](#4--5)
        * [更新分类](#i-example-request--34)
    1. [删除分类](#5--4)
        * [删除分类](#i-example-request--35)
* [答案接口](#)
    1. [获取答案列表](#1--8)
        * [获取答案列表](#i-example-request--36)
    1. [获取指定答案](#2--6)
        * [获取指定答案](#i-example-request--37)
    1. [创建答案](#3--6)
        * [创建答案](#i-example-request--38)
    1. [修改答案](#4--6)
        * [修改答案](#i-example-request--39)
    1. [删除答案](#5--5)
        * [删除答案](#i-example-request--40)

--------



## 用户



### 1. 用户注册



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/user
```



***Body:***

```js        
{
    "email":"query@qq.com",
    "password":"123123",
    "username":"黎明"
}
```



***More example Requests/Responses:***


#### I. Example Request: 用户注册



***Body:***

```js        
{
    "email":"query1@qq.com",
    "password":"123123",
    "username":"黎明1"
}
```



#### I. Example Response: 用户注册
```js
{
    "code": 200,
    "msg": "注册成功",
    "data": {
        "email": "query1@qq.com",
        "username": "黎明1"
    }
}
```


***Status Code:*** 200

<br>



### 2. 用户登录



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/user/login
```



***Body:***

```js        
{
    "email":"test1@qq.com",
    "password":"123123"
}
```



***More example Requests/Responses:***


#### I. Example Request: 用户登录



***Body:***

```js        
{
    "email":"query@qq.com",
    "password":"123123"
}
```



#### I. Example Response: 用户登录
```js
{
    "id": "63df9996e630f728b6232265",
    "username": "黎明",
    "email": "query@qq.com",
    "code": 200,
    "msg": "登录成功!",
    "authorization": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ"
    },
    "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
}
```


***Status Code:*** 200

<br>



### 3. 修改用户信息



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:3000/api/user/63d8bb472f031b69799dfadb
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q4YmI0NzJmMDMxYjY5Nzk5ZGZhZGIiLCJpYXQiOjE2NzU1OTg0MTgsImV4cCI6MTY3NjIwMzIxOH0.MQ9Y_z_Tk0E5yYCLuidsyQwBw2wqFCGfLXXEyquzEpU |  |



***Body:***

```js        
{
    "username":"你好",
    "email":"test1@qq.com",
    "password":"123123"
}
```



***More example Requests/Responses:***


#### I. Example Request: 修改用户信息


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q4YmI0NzJmMDMxYjY5Nzk5ZGZhZGIiLCJpYXQiOjE2NzU1OTg0MTgsImV4cCI6MTY3NjIwMzIxOH0.MQ9Y_z_Tk0E5yYCLuidsyQwBw2wqFCGfLXXEyquzEpU |  |



***Body:***

```js        
{
    "username":"你好",
    "email":"test1@qq.com",
    "password":"123123"
}
```



#### I. Example Response: 修改用户信息
```js
{
    "code": 200,
    "msg": "更新成功",
    "data": {
        "body": {
            "username": "你好",
            "email": "test1@qq.com",
            "password": "$2b$10$O4fuJ.rY/8uqhqGZkIgDLeQxadoEsz1YP9GevwOwkJrB2VpUoSKM2"
        }
    }
}
```


***Status Code:*** 200

<br>



### 4. 获取指定用户



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/user/63d8bb472f031b69799dfadb
```



***More example Requests/Responses:***


#### I. Example Request: 获取指定用户



***Body: None***



#### I. Example Response: 获取指定用户
```js
{
    "code": 200,
    "msg": "查询指定用户成功",
    "data": {
        "user": {
            "_id": "63d8bb472f031b69799dfadb",
            "email": "test1@qq.com",
            "username": "你好",
            "gender": "male",
            "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
            "slogn": "hello"
        }
    }
}
```


***Status Code:*** 200

<br>



### 5. 获取所有用户



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/user
```



***More example Requests/Responses:***


#### I. Example Request: 获取所有用户



***Body: None***



#### I. Example Response: 获取所有用户
```js
{
    "code": 200,
    "msg": "用户列表查询成功",
    "data": {
        "userList": [
            {
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "slogn": "badspider",
                "_id": "63c6670f434a1d26d7da7278",
                "email": "123456@qq.com",
                "username": "yellowapple",
                "gender": "male"
            },
            {
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "slogn": "badspider",
                "_id": "63c6671e434a1d26d7da727b",
                "email": "222@qq.com",
                "username": "redapple",
                "gender": "male"
            },
            {
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male",
                "slogn": "badspider",
                "_id": "63c66729434a1d26d7da727e",
                "email": "333@qq.com",
                "username": "greenapple"
            },
            {
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male",
                "slogn": "badspider",
                "_id": "63c66733434a1d26d7da7281",
                "email": "444@qq.com",
                "username": "badapple"
            },
            {
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male",
                "slogn": "badspider",
                "_id": "63c66741434a1d26d7da7284",
                "email": "555@qq.com",
                "username": "dinnerapple"
            },
            {
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "slogn": "badspider",
                "_id": "63d77b84bd49cb1892c2ee0b",
                "email": "test@qq.com",
                "username": "banana",
                "gender": "male"
            },
            {
                "_id": "63d8bb472f031b69799dfadb",
                "email": "test1@qq.com",
                "username": "你好",
                "gender": "male",
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "slogn": "hello"
            },
            {
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "slogn": "badspider",
                "_id": "63d8d10c2f031b69799dfae8",
                "email": "yellow@qq.com",
                "username": "yellow",
                "gender": "male"
            },
            {
                "slogn": "badspider",
                "_id": "63dccb8c2abc4034968a5e9a",
                "email": "xiaoai@qq.com",
                "username": "小艾",
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male"
            },
            {
                "_id": "63dccbce562719dd33e3da83",
                "email": "xiaoai1@qq.com",
                "username": "小艾",
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male",
                "slogn": "badspider"
            },
            {
                "_id": "63dcf6ce7741fa108beddf16",
                "email": "memory@qq.com",
                "username": "perdict",
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male",
                "slogn": "badspider"
            },
            {
                "_id": "63df9996e630f728b6232265",
                "email": "query@qq.com",
                "username": "黎明",
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male",
                "slogn": "badspider"
            }
        ]
    }
}
```


***Status Code:*** 200

<br>



### 6. 删除用户



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:3000/api/user/63d8bb472f031b69799dfadb
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q4YmI0NzJmMDMxYjY5Nzk5ZGZhZGIiLCJpYXQiOjE2NzU1OTg0MTgsImV4cCI6MTY3NjIwMzIxOH0.MQ9Y_z_Tk0E5yYCLuidsyQwBw2wqFCGfLXXEyquzEpU |  |



***Body:***

```js        
{
    "email":"test1@qq.com",
    "password":"123123"
}
```



***More example Requests/Responses:***


#### I. Example Request: 删除用户


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q4YmI0NzJmMDMxYjY5Nzk5ZGZhZGIiLCJpYXQiOjE2NzU1OTg0MTgsImV4cCI6MTY3NjIwMzIxOH0.MQ9Y_z_Tk0E5yYCLuidsyQwBw2wqFCGfLXXEyquzEpU |  |



***Body:***

```js        
{
    "email":"test1@qq.com",
    "password":"123123"
}
```



#### I. Example Response: 删除用户
```js
{
    "code": 200,
    "msg": "用户删除成功",
    "data": {
        "body": {
            "email": "test1@qq.com",
            "password": "123123"
        }
    }
}
```


***Status Code:*** 200

<br>



## 文件上传



### 1. 文件上传



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: http://localhost:3000/api/upload
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  |  |



***More example Requests/Responses:***


#### I. Example Request: 文件上传



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  |  |



#### I. Example Response: 文件上传
```js
{
    "code": 200,
    "msg": "上传成功",
    "data": "http://localhost:3000/upload/Screenshot_20200301_205411.jpg"
}
```


***Status Code:*** 200

<br>



## 个人资料



### 1. 修改个人资料



***Endpoint:***

```bash
Method: GET
Type: 
URL: 
```



## 关注



### 1. 获取关注列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/user/63df9996e630f728b6232265/following
```



***More example Requests/Responses:***


#### I. Example Request: 获取关注列表



***Body: None***



#### I. Example Response: 获取关注列表
```js
{
    "code": 200,
    "msg": "获取关注列表成功",
    "data": {
        "_id": "63df9996e630f728b6232265",
        "email": "query@qq.com",
        "username": "黎明",
        "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        "gender": "male",
        "slogn": "badspider",
        "following": [
            {
                "_id": "63df9996e630f728b6232265",
                "email": "query@qq.com",
                "username": "黎明",
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male",
                "slogn": "badspider"
            },
            {
                "slogn": "badspider",
                "_id": "63dccb8c2abc4034968a5e9a",
                "email": "xiaoai@qq.com",
                "username": "小艾",
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male"
            },
            {
                "_id": "63dcf6ce7741fa108beddf16",
                "email": "memory@qq.com",
                "username": "perdict",
                "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
                "gender": "male",
                "slogn": "badspider"
            }
        ]
    }
}
```


***Status Code:*** 200

<br>



### 2. 关注



***Endpoint:***

```bash
Method: PUT
Type: 
URL: http://localhost:3000/api/user/following/63dcf6ce7741fa108beddf16
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***More example Requests/Responses:***


#### I. Example Request: 关注


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body: None***



#### I. Example Response: 关注
```js
{
    "code": 200,
    "msg": "关注成功",
    "data": {
        "_id": "63df9996e630f728b6232265",
        "email": "query@qq.com",
        "username": "黎明",
        "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        "gender": "male",
        "slogn": "badspider",
        "following": [
            "63df9996e630f728b6232265",
            "63dccb8c2abc4034968a5e9a",
            "63dcf6ce7741fa108beddf16"
        ],
        "__v": 1
    }
}
```


***Status Code:*** 200

<br>



### 3. 取消关注



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:3000/api/user/following/63dcf6ce7741fa108beddf16
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***More example Requests/Responses:***


#### I. Example Request: 取消关注


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body: None***



#### I. Example Response: 取消关注
```js
{
    "code": 200,
    "msg": "取消关注成功"
}
```


***Status Code:*** 200

<br>



### 4. 获取用户粉丝列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/user/63df9996e630f728b6232265/followers
```



***More example Requests/Responses:***


#### I. Example Request: 获取用户粉丝列表



***Body: None***



#### I. Example Response: 获取用户粉丝列表
```js
{
    "code": 200,
    "msg": "查询粉丝列表成功",
    "data": [
        {
            "_id": "63df9996e630f728b6232265",
            "email": "query@qq.com",
            "username": "黎明",
            "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
            "gender": "male",
            "slogn": "badspider"
        }
    ]
}
```


***Status Code:*** 200

<br>



## 话题接口



### 1. 创建话题



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/topics
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "name":"postman"
}
```



***More example Requests/Responses:***


#### I. Example Request: 创建话题


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "name":"postman"
}
```



#### I. Example Response: 创建话题
```js
{
    "code": 200,
    "msg": "话题添加成功",
    "data": {
        "name": "postman"
    }
}
```


***Status Code:*** 200

<br>



### 2. 查询话题列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/topics
```



***More example Requests/Responses:***


#### I. Example Request: 查询话题列表



***Body: None***



#### I. Example Response: 查询话题列表
```js
{
    "code": 200,
    "msg": "获取话题列表成功",
    "data": [
        {
            "_id": "63ca2a077e369cfc559fadf0",
            "name": "vue"
        },
        {
            "_id": "63ca2a137e369cfc559fadf3",
            "name": "React"
        },
        {
            "_id": "63ca2a1b7e369cfc559fadf6",
            "name": "TaiwindCSS"
        },
        {
            "_id": "63ca2a397e369cfc559fadf9",
            "name": "北京"
        },
        {
            "_id": "63ca2a457e369cfc559fadfc",
            "name": "badspider"
        },
        {
            "_id": "63ca2aaba642fc404bd6f35a",
            "name": "badspider",
            "avatar_url": "sadasdas"
        },
        {
            "_id": "63ca2ab2a642fc404bd6f35d",
            "name": "yellowapple",
            "avatar_url": "sadasdas"
        },
        {
            "_id": "63ca2ab7a642fc404bd6f360",
            "name": "youname",
            "avatar_url": "sadasdas"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 3. 查询指定话题



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/topics/63ca2a077e369cfc559fadf0
```



***More example Requests/Responses:***


#### I. Example Request: 查询指定话题



***Body: None***



#### I. Example Response: 查询指定话题
```js
{
    "code": 200,
    "msg": "获取话题成功",
    "data": {
        "_id": "63ca2a077e369cfc559fadf0",
        "name": "vue"
    }
}
```


***Status Code:*** 200

<br>



### 4. 更新话题



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:3000/api/topics/63ca2a077e369cfc559fadf0
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "name":"Vue3"
}
```



***More example Requests/Responses:***


#### I. Example Request: 更新话题


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "name":"Vue3"
}
```



#### I. Example Response: 更新话题
```js
{
    "code": 200,
    "msg": "更新话题成功",
    "data": {
        "name": "Vue3"
    }
}
```


***Status Code:*** 200

<br>



### 5. 关注话题



***Endpoint:***

```bash
Method: PUT
Type: 
URL: http://localhost:3000/api/user/followingTopic/63ca2a077e369cfc559fadf0
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***More example Requests/Responses:***


#### I. Example Request: 关注话题


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body: None***



#### I. Example Response: 关注话题
```js
{
    "code": 200,
    "msg": "关注成功",
    "data": {
        "_id": "63df9996e630f728b6232265",
        "email": "query@qq.com",
        "username": "黎明",
        "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        "gender": "male",
        "slogn": "badspider",
        "followingTopic": [
            "63ca2a077e369cfc559fadf0"
        ],
        "__v": 1
    }
}
```


***Status Code:*** 200

<br>



### 6. 取消关注话题



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:3000/api/user/followingTopic/63ca2a077e369cfc559fadf0
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***More example Requests/Responses:***


#### I. Example Request: 取消关注话题


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body: None***



#### I. Example Response: 取消关注话题
```js
{
    "code": 200,
    "msg": "取消关注成功"
}
```


***Status Code:*** 200

<br>



### 7. 获取某人关注话题列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/user/63df9996e630f728b6232265/followingTopic
```



***More example Requests/Responses:***


#### I. Example Request: 获取某人关注话题列表



***Body: None***



#### I. Example Response: 获取某人关注话题列表
```js
{
    "code": 200,
    "msg": "查询成功",
    "data": {
        "_id": "63df9996e630f728b6232265",
        "email": "query@qq.com",
        "username": "黎明",
        "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        "gender": "male",
        "slogn": "badspider",
        "followingTopic": []
    }
}
```


***Status Code:*** 200

<br>



### 8. 话题的粉丝



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/topics/63ca2a077e369cfc559fadf0/followers
```



***More example Requests/Responses:***


#### I. Example Request: 话题的粉丝



***Body: None***



#### I. Example Response: 话题的粉丝
```js
{
    "code": 200,
    "msg": "获取成功",
    "data": [
        {
            "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
            "slogn": "badspider",
            "_id": "63c6670f434a1d26d7da7278",
            "email": "123456@qq.com",
            "username": "yellowapple",
            "gender": "male"
        }
    ]
}
```


***Status Code:*** 200

<br>



## 问题接口



### 1. 新增问题



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/questions/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "title":"postman",
    "description":"yyyyy",
    "topics":["63ca2a077e369cfc559fadf0"]
}
```



***More example Requests/Responses:***


#### I. Example Request: 新增问题


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "title":"postman",
    "description":"yyyyy",
    "topics":["63ca2a077e369cfc559fadf0"]
}
```



#### I. Example Response: 新增问题
```js
{
    "code": 200,
    "msg": "问题添加成功",
    "data": {
        "title": "postman",
        "description": "yyyyy",
        "questioner": "63df9996e630f728b6232265",
        "topics": [
            "63ca2a077e369cfc559fadf0"
        ],
        "_id": "63dfa7ef8318f78883cf5406",
        "createdAt": "2023-02-05T12:58:23.315Z",
        "updatedAt": "2023-02-05T12:58:23.315Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 2. 获取问题列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/questions/
```



***More example Requests/Responses:***


#### I. Example Request: 获取问题列表



***Body: None***



#### I. Example Response: 获取问题列表
```js
{
    "code": 200,
    "msg": "获取问题列表成功",
    "data": [
        {
            "_id": "63ca96e0a59411939621f546",
            "title": "vue is the best language",
            "description": "i agree that"
        },
        {
            "_id": "63ca96eba59411939621f548",
            "title": "angular is the best language",
            "description": "i agree that"
        },
        {
            "_id": "63ca96f5a59411939621f54a",
            "title": "TaiwindCSS is the best language",
            "description": "i agree that"
        },
        {
            "_id": "63df5e7ee630f728b623223e",
            "title": "Node的性能是由什么决定的呢？",
            "createdAt": "2023-02-05T07:45:02.311Z",
            "updatedAt": "2023-02-05T07:45:02.311Z"
        },
        {
            "_id": "63df61fee630f728b6232249",
            "title": "vue的性能是由什么决定的呢？",
            "description": "V8引擎",
            "createdAt": "2023-02-05T07:59:58.670Z",
            "updatedAt": "2023-02-05T07:59:58.670Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 3. 查询指定问题



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/questions/63ca96e0a59411939621f546
```



***More example Requests/Responses:***


#### I. Example Request: 查询指定问题



***Body: None***



#### I. Example Response: 查询指定问题
```js
{
    "code": 200,
    "msg": "获取问题成功",
    "data": {
        "topics": [],
        "_id": "63ca96e0a59411939621f546",
        "title": "vue is the best language",
        "description": "i agree that",
        "questioner": {
            "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
            "slogn": "badspider",
            "_id": "63c6670f434a1d26d7da7278",
            "email": "123456@qq.com",
            "username": "yellowapple",
            "gender": "male"
        }
    }
}
```


***Status Code:*** 200

<br>



### 4. 修改问题



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:3000/api/questions/63ca96e0a59411939621f546
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "title":"修改了问题的title"
}
```



***More example Requests/Responses:***


#### I. Example Request: 修改问题


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "title":"修改了问题的title"
}
```



#### I. Example Response: 修改问题
```js
{
    "code": 200,
    "msg": "更新问题成功",
    "data": {
        "title": "修改了问题的title"
    }
}
```


***Status Code:*** 200

<br>



### 5. 删除问题



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:3000/api/questions/63ca96e0a59411939621f546
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***More example Requests/Responses:***


#### I. Example Request: 删除问题


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body: None***



#### I. Example Response: 删除问题
```js
{
    "code": 200,
    "msg": "删除问题成功",
    "data": {
        "topics": [],
        "_id": "63ca96e0a59411939621f546",
        "title": "修改了问题的title",
        "description": "i agree that",
        "questioner": "63df9996e630f728b6232265",
        "__v": 0,
        "updatedAt": "2023-02-05T15:22:26.490Z"
    }
}
```


***Status Code:*** 200

<br>



### 6. 用户的问题列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/user/63df9996e630f728b6232265/questions
```



***More example Requests/Responses:***


#### I. Example Request: 用户的问题列表



***Body: None***



#### I. Example Response: 用户的问题列表
```js
{
    "code": 200,
    "msg": "成功,666!",
    "data": [
        {
            "_id": "63dfa7ef8318f78883cf5406",
            "title": "postman",
            "description": "yyyyy",
            "createdAt": "2023-02-05T12:58:23.315Z",
            "updatedAt": "2023-02-05T12:58:23.315Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 7. 话题的问题



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/topics/63ca2a1b7e369cfc559fadf6/questions
```



***More example Requests/Responses:***


#### I. Example Request: 话题的问题



***Body: None***



#### I. Example Response: 话题的问题
```js
{
    "code": 200,
    "msg": "查找成功",
    "data": []
}
```


***Status Code:*** 200

<br>



## 文章



### 1. 获取文章列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/articles
```



***More example Requests/Responses:***


#### I. Example Request: 获取文章列表



***Body: None***



#### I. Example Response: 获取文章列表
```js
{
    "code": 200,
    "msg": "获取所有文章成功",
    "data": {
        "list": [
            {
                "_id": "63dcba75701d466b8af12487",
                "title": "test",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T07:40:37.913Z",
                "updatedAt": "2023-02-03T07:40:37.913Z"
            },
            {
                "_id": "63dcba81701d466b8af12489",
                "title": "Vue入门指南",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T07:40:49.856Z",
                "updatedAt": "2023-02-03T07:40:49.856Z"
            },
            {
                "_id": "63dcba8c701d466b8af1248b",
                "title": "React入门指南",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T07:41:00.130Z",
                "updatedAt": "2023-02-03T07:41:00.130Z"
            },
            {
                "_id": "63dcc369701d466b8af124ab",
                "title": "小艾入门指南",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T08:18:49.160Z",
                "updatedAt": "2023-02-03T08:18:49.160Z"
            },
            {
                "_id": "63dcc373701d466b8af124ad",
                "title": "小艾的优点",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T08:18:59.066Z",
                "updatedAt": "2023-02-03T08:18:59.066Z"
            },
            {
                "_id": "63dcc37a701d466b8af124af",
                "title": "小宁的优点",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T08:19:06.834Z",
                "updatedAt": "2023-02-03T08:19:06.834Z"
            },
            {
                "_id": "63dcc3ae701d466b8af124b2",
                "title": "Koa2教程",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T08:19:58.547Z",
                "updatedAt": "2023-02-03T08:19:58.547Z"
            },
            {
                "_id": "63dcc3b5701d466b8af124b4",
                "title": "MongoDB教程",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T08:20:05.639Z",
                "updatedAt": "2023-02-03T08:20:05.639Z"
            },
            {
                "_id": "63dcc3bc701d466b8af124b6",
                "title": "Vue教程",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T08:20:12.853Z",
                "updatedAt": "2023-02-03T08:20:12.853Z"
            },
            {
                "_id": "63dcc3dc701d466b8af124ba",
                "title": "taiwindcss教程",
                "content": "this is  a test",
                "status": "published",
                "category": {
                    "_id": "63dcb663701ec3dfcf40a6ce",
                    "name": "Vue"
                },
                "author": null,
                "createdAt": "2023-02-03T08:20:44.618Z",
                "updatedAt": "2023-02-03T08:20:44.618Z"
            }
        ],
        "totalCount": 10,
        "pageNumber": 1,
        "totalCounts": 13
    }
}
```


***Status Code:*** 200

<br>



### 2. 获取指定文章



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/articles/63dcba75701d466b8af12487
```



***More example Requests/Responses:***


#### I. Example Request: 获取指定文章



***Body: None***



#### I. Example Response: 获取指定文章
```js
{
    "code": 200,
    "msg": "获取文章成功",
    "data": {
        "_id": "63dcba75701d466b8af12487",
        "title": "test",
        "content": "this is  a test",
        "status": "published",
        "category": {
            "_id": "63dcb663701ec3dfcf40a6ce",
            "name": "Vue"
        },
        "author": null,
        "createdAt": "2023-02-03T07:40:37.913Z",
        "updatedAt": "2023-02-03T07:40:37.913Z"
    }
}
```


***Status Code:*** 200

<br>



### 3. 新增文章



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/articles
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "title":"new article",
    "content":"this is a new article",
    "status":"published",
    "category":"63dcb98f2b09a0ab96f34de2"
}
```



***More example Requests/Responses:***


#### I. Example Request: 新增文章


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "title":"new article",
    "content":"this is a new article",
    "status":"published",
    "category":"63dcb98f2b09a0ab96f34de2"
}
```



#### I. Example Response: 新增文章
```js
{
    "code": 200,
    "msg": "添加文章成功",
    "data": {
        "title": "new article",
        "content": "this is a new article",
        "status": "published",
        "category": "63dcb98f2b09a0ab96f34de2",
        "author": "63df9996e630f728b6232265",
        "_id": "63dfce86d268af55835cae3f",
        "createdAt": "2023-02-05T15:43:02.127Z",
        "updatedAt": "2023-02-05T15:43:02.127Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 4. 编辑文章



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:3000/api/articles/63dfce86d268af55835cae3f
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "content":"update article",
    "title":"aaaa",
    "status":"published",
    "category":"63dcb98f2b09a0ab96f34de2"
}
```



***More example Requests/Responses:***


#### I. Example Request: 编辑文章


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "content":"update article",
    "title":"aaaa",
    "status":"published",
    "category":"63dcb98f2b09a0ab96f34de2"
}
```



#### I. Example Response: 编辑文章
```js
{
    "code": 200,
    "msg": "文章修改成功",
    "data": {
        "_id": "63dfce86d268af55835cae3f",
        "title": "aaaa",
        "content": "update article",
        "status": "published",
        "category": "63dcb98f2b09a0ab96f34de2",
        "author": "63df9996e630f728b6232265",
        "createdAt": "2023-02-05T15:43:02.127Z",
        "updatedAt": "2023-02-05T15:47:11.577Z"
    }
}
```


***Status Code:*** 200

<br>



### 5. 删除文章



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:3000/api/articles/63dfce86d268af55835cae3f
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***More example Requests/Responses:***


#### I. Example Request: 删除文章


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body: None***



#### I. Example Response: 删除文章
```js
{
    "code": 200,
    "msg": "删除文章成功",
    "data": {
        "_id": "63dfce86d268af55835cae3f",
        "title": "aaaa",
        "content": "update article",
        "status": "published",
        "category": "63dcb98f2b09a0ab96f34de2",
        "author": "63df9996e630f728b6232265",
        "createdAt": "2023-02-05T15:43:02.127Z",
        "updatedAt": "2023-02-05T15:47:11.577Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



## 文章分类



### 1. 获取分类列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/categories
```



***More example Requests/Responses:***


#### I. Example Request: 获取分类列表



***Body: None***



#### I. Example Response: 获取分类列表
```js
{
    "code": 200,
    "msg": "分类获取成功",
    "data": [
        {
            "_id": "63dcb663701ec3dfcf40a6ce",
            "name": "Vue"
        },
        {
            "_id": "63dcb9892b09a0ab96f34ddf",
            "name": "React"
        },
        {
            "_id": "63dcb98f2b09a0ab96f34de2",
            "name": "Koa2"
        },
        {
            "_id": "63dcb9942b09a0ab96f34de5",
            "name": "Express"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. 获取指定分类



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/categories/63dcb663701ec3dfcf40a6ce
```



***More example Requests/Responses:***


#### I. Example Request: 获取指定分类



***Body: None***



#### I. Example Response: 获取指定分类
```js
{
    "code": 200,
    "msg": "分类信息获取成功",
    "data": {
        "_id": "63dcb663701ec3dfcf40a6ce",
        "name": "Vue"
    }
}
```


***Status Code:*** 200

<br>



### 3. 新增文章分类



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/categories
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "name":"postman"
}
```



***More example Requests/Responses:***


#### I. Example Request: 新增文章分类


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "name":"postman"
}
```



#### I. Example Response: 新增文章分类
```js
{
    "code": 200,
    "msg": "分类添加成功",
    "data": {
        "name": "postman"
    }
}
```


***Status Code:*** 200

<br>



### 4. 更新分类



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:3000/api/categories/63dcb663701ec3dfcf40a6ce
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "name":"postman1"
}
```



***More example Requests/Responses:***


#### I. Example Request: 更新分类


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body:***

```js        
{
    "name":"postman1"
}
```



#### I. Example Response: 更新分类
```js
{
    "code": 200,
    "msg": "编辑成功",
    "data": {
        "_id": "63dcb663701ec3dfcf40a6ce",
        "name": "postman1"
    }
}
```


***Status Code:*** 200

<br>



### 5. 删除分类



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:3000/api/categories/63dcb663701ec3dfcf40a6ce
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***More example Requests/Responses:***


#### I. Example Request: 删除分类


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Body: None***



#### I. Example Response: 删除分类
```js
{
    "code": 200,
    "msg": "删除分类成功",
    "data": {
        "_id": "63dcb663701ec3dfcf40a6ce",
        "name": "postman1",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



## 答案接口



### 1. 获取答案列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/questions/:questionId/answers
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***More example Requests/Responses:***


#### I. Example Request: 获取答案列表



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***Body: None***



#### I. Example Response: 获取答案列表
```js
{
    "code": 200,
    "msg": "获取答案列表成功",
    "data": [
        {
            "_id": "63dfd216d268af55835cae52",
            "content": "this is answer",
            "voteCount": 0,
            "createdAt": "2023-02-05T15:58:14.883Z",
            "updatedAt": "2023-02-05T15:58:14.883Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. 获取指定答案



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/questions/:questionId/answers/63dfd216d268af55835cae52
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***More example Requests/Responses:***


#### I. Example Request: 获取指定答案



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***Body: None***



#### I. Example Response: 获取指定答案
```js
{
    "code": 200,
    "msg": "获取答案成功",
    "data": {
        "_id": "63dfd216d268af55835cae52",
        "content": "this is answer",
        "answerer": {
            "_id": "63df9996e630f728b6232265",
            "email": "query@qq.com",
            "username": "黎明",
            "avatar_url": "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
            "gender": "male",
            "slogn": "badspider"
        },
        "voteCount": 0,
        "createdAt": "2023-02-05T15:58:14.883Z",
        "updatedAt": "2023-02-05T15:58:14.883Z"
    }
}
```


***Status Code:*** 200

<br>



### 3. 创建答案



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/questions/:questionId/answers
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***Body:***

```js        
{
    "content":"this is answer"
}
```



***More example Requests/Responses:***


#### I. Example Request: 创建答案


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***Body:***

```js        
{
    "content":"this is answer"
}
```



#### I. Example Response: 创建答案
```js
{
    "code": 200,
    "msg": "答案回答成功",
    "data": {
        "content": "this is answer",
        "answerer": "63df9996e630f728b6232265",
        "voteCount": 0,
        "_id": "63dfd216d268af55835cae52",
        "createdAt": "2023-02-05T15:58:14.883Z",
        "updatedAt": "2023-02-05T15:58:14.883Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 4. 修改答案



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:3000/api/questions/:questionId/answers/63dfd216d268af55835cae52
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***Body:***

```js        
{
    "content":"update answer"
}
```



***More example Requests/Responses:***


#### I. Example Request: 修改答案


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***Body:***

```js        
{
    "content":"update answer"
}
```



#### I. Example Response: 修改答案
```js
{
    "code": 200,
    "msg": "更新答案成功",
    "data": {
        "content": "update answer"
    }
}
```


***Status Code:*** 200

<br>



### 5. 删除答案



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:3000/api/questions/:questionId/answers/63dfd216d268af55835cae52
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***More example Requests/Responses:***


#### I. Example Request: 删除答案


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmOTk5NmU2MzBmNzI4YjYyMzIyNjUiLCJpYXQiOjE2NzU2MDA1NzEsImV4cCI6MTY3NjIwNTM3MX0.wEIL2OkBktfocuoYT3AK_0ad14MxNTKtAyhY3NZuLbQ |  |



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| questionId | 63dfa7ef8318f78883cf5406 |  |



***Body: None***



#### I. Example Response: 删除答案
```js
{
    "code": 200,
    "msg": "删除答案成功",
    "data": {
        "_id": "63dfd216d268af55835cae52",
        "content": "update answer",
        "answerer": "63df9996e630f728b6232265",
        "voteCount": 0,
        "createdAt": "2023-02-05T15:58:14.883Z",
        "updatedAt": "2023-02-05T16:02:13.205Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



---
[Back to top](#zhihu)

>Generated at 2023-02-06 00:06:43 by [docgen](https://github.com/thedevsaddam/docgen)
