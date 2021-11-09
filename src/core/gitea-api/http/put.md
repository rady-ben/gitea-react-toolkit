Put does not pass params nor allow caching even if passed.

```js
import { Core, put } from 'gitea-react-toolkit';

const props = {
  url: 'put',
  config: {
    server: 'https://httpbin.org',
  },
  params: { attribute: 'value' },
  payload: { key: 'value' },
  noCache: false,
};

<Core
  promise={put}
  props={props}
/>
```
