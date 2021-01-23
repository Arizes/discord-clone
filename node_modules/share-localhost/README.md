# README.md

    Instantly share your localhost on internet

## cli

```
npx share-localhost
npx share-localhost -p YOUR_PORT
```

### if install as global npm module

```
share-localhost -p YOUR_PORT
local-out -p YOUR_PORT
lo -p YOUR_PORT
```

## install

```
yarn add share-localhost
```

## provider

- [http://localhost.run/](http://localhost.run/)
- [http://serveo.net/](http://serveo.net/)

## demo

```typescript
import LocalOut, { EnumLocalOutEvent } from 'share-localhost';
import { console } from 'debug-color2'

let YOUR_PORT = 80;

let context = new LocalOut({
	port: YOUR_PORT,
});

context.connect().tap(ret => {

	console.log(`server online by`, 'hostname:', ret.hostname, 'port:', ret.port);

	/**
	 * close connect
	 */
	context.close();
});
```

## link

- https://www.npmjs.com/package/fasttunnel
- [利用serveo把local開發環境發佈到internet中](https://guahsu.io/2018/06/expose-local-servers-to-the-internet-by-serveo/)
