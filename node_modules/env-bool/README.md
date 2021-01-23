# env-bool README

    env value to JS value, check env val is boolean or others

```ts
import envBool, { envVal } from 'env-bool';
```

> by default: mode2 = true

when mode2 is true

envBool will only return number or boolean

```ts
function envVal(val)
function envBool(val, mode2: boolean = true)
```

```ts
  test\index.test.ts
    '1'
      √ envBool: 1, mode2 = false
      √ envVal: 1
      √ envBool: 1, mode2 = true
    '0'
      √ envBool: 0, mode2 = false
      √ envVal: 0
      √ envBool: 0, mode2 = true
    1
      √ envBool: 1, mode2 = false
      √ envVal: 1
      √ envBool: 1, mode2 = true
    0
      √ envBool: 0, mode2 = false
      √ envVal: 0
      √ envBool: 0, mode2 = true
    null
      √ envBool: null, mode2 = false
      √ envVal: null
      √ envBool: false, mode2 = true
    'null'
      √ envBool: null, mode2 = false
      √ envVal: null
      √ envBool: false, mode2 = true
    undefined
      √ envBool: undefined, mode2 = false
      √ envVal: undefined
      √ envBool: false, mode2 = true
    'undefined'
      √ envBool: undefined, mode2 = false
      √ envVal: undefined
      √ envBool: false, mode2 = true
    undefined
      √ envBool: undefined, mode2 = false
      √ envVal: undefined
      √ envBool: false, mode2 = true
    true
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    'true'
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    false
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    'false'
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    'yes'
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    'no'
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    'on'
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    'off'
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    'enabled'
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    'disabled'
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    'NULL'
      √ envBool: null, mode2 = false
      √ envVal: null
      √ envBool: false, mode2 = true
    'UNDEFINED'
      √ envBool: undefined, mode2 = false
      √ envVal: undefined
      √ envBool: false, mode2 = true
    'TRUE'
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    'FALSE'
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    'YES'
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    'NO'
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    'ON'
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    'OFF'
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    'ENABLED'
      √ envBool: true, mode2 = false
      √ envVal: true
      √ envBool: true, mode2 = true
    'DISABLED'
      √ envBool: false, mode2 = false
      √ envVal: false
      √ envBool: false, mode2 = true
    ''
      √ envBool: false, mode2 = false
      √ envVal: ''
      √ envBool: false, mode2 = true
    '\t'
      √ envBool: false, mode2 = false
      √ envVal: '\t'
      √ envBool: false, mode2 = true
    ' '
      √ envBool: false, mode2 = false
      √ envVal: ' '
      √ envBool: false, mode2 = true
    '\n'
      √ envBool: false, mode2 = false
      √ envVal: '\n'
      √ envBool: false, mode2 = true
    'a'
      √ envBool: false, mode2 = false
      √ envVal: 'a'
      √ envBool: false, mode2 = true
    '099'
      √ envBool: false, mode2 = false
      √ envVal: '099'
      √ envBool: false, mode2 = true
    '99'
      √ envBool: 99, mode2 = false
      √ envVal: 99
      √ envBool: 99, mode2 = true
    '099.9'
      √ envBool: false, mode2 = false
      √ envVal: '099.9'
      √ envBool: false, mode2 = true
    '99.9'
      √ envBool: 99.9, mode2 = false
      √ envVal: 99.9
      √ envBool: 99.9, mode2 = true
    -1
      √ envBool: -1, mode2 = false
      √ envVal: -1
      √ envBool: -1, mode2 = true
    '-1'
      √ envBool: -1, mode2 = false
      √ envVal: -1
      √ envBool: -1, mode2 = true
    -1.1
      √ envBool: -1.1, mode2 = false
      √ envVal: -1.1
      √ envBool: -1.1, mode2 = true
    '-1.1'
      √ envBool: -1.1, mode2 = false
      √ envVal: -1.1
      √ envBool: -1.1, mode2 = true
    '0x11'
      √ envBool: false, mode2 = false
      √ envVal: '0x11'
      √ envBool: false, mode2 = true
    '0b11'
      √ envBool: false, mode2 = false
      √ envVal: '0b11'
      √ envBool: false, mode2 = true
    '0o11'
      √ envBool: false, mode2 = false
      √ envVal: '0o11'
      √ envBool: false, mode2 = true
    '100a'
      √ envBool: false, mode2 = false
      √ envVal: '100a'
      √ envBool: false, mode2 = true
    '\u0001'
      √ envBool: false, mode2 = false
      √ envVal: '\u0001'
      √ envBool: false, mode2 = true
    {}
      √ envBool: {}, mode2 = false
      √ envVal: {}
      √ envBool: false, mode2 = true
    []
      √ envBool: [], mode2 = false
      √ envVal: []
      √ envBool: false, mode2 = true
```
