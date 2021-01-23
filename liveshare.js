import LocalOut, { EnumLocalOutEvent } from 'share-localhost';
 
 
let context = new LocalOut({
    port: 3000,
});
 
context.connect().tap(ret => {
 
    console.log(`server online by`, 'hostname:', ret.hostname, 'port:', ret.port);
 
    /**
     * close connect
     */
    context.close();
});