Get does not pass payload even if passed.

```js
import { Core, get } from 'gitea-react-toolkit';

const props = {
  url: 'get',
  config: {
    server: 'https://httpbin.org',
  },
  params: { attribute: 'value' },
  payload: { key: 'value' },
  noCache: false,
};

<Core
  promise={get}
  props={props}
/>
```
