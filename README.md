### DiscordMusic-Templete-typescript

1. ติดตั้ง [Node.js v16+](https://nodejs.org/en/)
2. ดาวน์โหลด git repo นี้และแตกไฟล์ หรือ `git clone https://github.com/SVNKVN9/DiscordMusic-Templete`
3. ติดตั้ง npm packages ด้วย npm i หรือ npm install
4. ดาวน์โหลด [Lavalink](https://github.com/freyacodes/Lavalink/releases/download/3.4/Lavalink.jar) <br>
4.1 ดาวน์โหลด และ ติดตั้ง Java 13
5. ย้าย lavalink.jar ไปยังโฟลเดอร์บอท <br>
5.1 แก้ไข `config.json` และ `application.yml`
6. `java -jar Lavalink.jar` ต้องแน่ใจว่ามีไฟล์ `application.yml`
7. `npm start` สำหรับใช้งานจริง หรือ `npm run dev` สำหรับพัฒนา

### config

ไฟล์ `src/config.ts`
```ts
export = {
    "prefix": "PREFIX HERE",
    "nodes": [
        {
            "host": "localhost",
            "port": 2333,
            "password": "password"
        }
    ]
}
```

ไฟล์ `.env`
```shell
TOKEN= Discord Bot Token
```
