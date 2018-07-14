## API 

host: `https://www.domain.com`

header: 
```json
{
    "content-type": "application/json"
}
```

- status只有success时返回200，且data内有数据; status为其他状态均表示失败
- message


1. 列表

- url: "/list.json"
- method: "GET"
- parms: 
```json
{
    "latitude": "latitude 纬度(必传)",
    "longitude": "longitude 经度(必传)"
    "name": "名称，支持模糊搜索 (搜索时传此参)"
}
```

- response
```json
{
    "status": 200,
    "message": "成功",
    "data": [
        {
            "id": "唯一id",
            "icon": "图标",
            "name": "名称",
            "stars": "评分",
            "phoneNumber": "电话",
            "distance": "距离(m)"
        },
        ...
    ]
}
```


2. 详情

- url: "/details.json"
- method: "GET"
- parms: 
```json
{
    "latitude": "latitude 纬度(必传)",
    "longitude": "longitude 经度(必传)",
    "id": "id (必传)"
}
```

- response
```json
{
    "status": 200,
    "message": "成功",
    "data": {
        "id": "唯一id",
        "icon": "图标",
        "banner": [
            "url1",
            "url2"
        ],
        "name": "名称",
        "stars": "评分",
        "startTime": "开始时间",
        "endTime": "结束时间",
        "phoneNumber": "电话",
        "latitude": "latitude 店铺纬度",
        "longitude": "longitude 店铺经度",
        "address": "地址",
        "introduce": "介绍"
    }
}
```