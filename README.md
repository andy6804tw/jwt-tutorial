[![GitHub license][license-image]][license-url]

## Getting Started
### Clone Project
 you can create a new project based on jwt-tutorial by doing the following:

```bash
$ git clone https://github.com/andy6804tw/jwt-tutorial.git
$ cd Mocha-Chai-tutorial
```

### Installation
When that's done, install the project dependencies.You can use npm or yarn(recommended) for dependency management。

```bash
$ npm install
```

### Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

| script | Description |
| ------| ------ |
| start | Serves your app at localhost:3030 |


## Router

### 1. 登入
**方法:** POST

**說明:** *登入時可在 body 存放 payload*

**路徑:** localhost:3030/api/login

**Parameters (body)**:
```json
{
	"name": "Andy",
	"email": "andy@mail.com"
}
```

<img src="/screenshot/img01.png" width="650">


### 2. 存取 Protected 路徑
**方法:** GET

**說明:** *登入後取得 JWT(idToken) 後拿取 JWT 存取此路徑內容*

**路徑:** localhost:3030/api/protected

**Parameters (headers):**
```json
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJBbmR5IiwiZW1haWwiOiJhbmR5QG1haWwuY29tIn0sImV4cCI6MTUyMDM5NDI0NSwiaWF0IjoxNTIwMzk0MTg1fQ.hANghAo6N57AusYJiiIODuxMPf2RFXz21KeaOY49QLE
```

**Reponse:**
```json
{
    "text": "Protected information. Congrats!",
    "data": {
        "user": {
            "name": "Andy",
            "email": "andy@mail.com"
        },
        "exp": 1520394245,
        "iat": 1520394185
    }
}
```

<img src="/screenshot/img02.png" width="650">


## LICENSE
### MIT



[license-image]: https://img.shields.io/npm/l/express.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com
[license-url]: https://github.com/andy6804tw/jwt-tutorial/blob/master/LICENSE
