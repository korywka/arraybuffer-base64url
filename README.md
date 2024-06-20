# arraybuffer-base64url

Convert `base64url` to `ArrayBuffer` and vice versa.

Useful for working with Web Push API, WebAuthn, etc.

Compatible with Browser, Node, Deno and serverless environments.

```js
import { base64url_to_buffer } from 'arraybuffer-base64url';
const buffer = base64url_to_buffer(string);
```

```js
import { buffer_to_base64url } from 'arraybuffer-base64url';
const string = buffer_to_base64url(buffer);
```
