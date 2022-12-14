## Summary
- Subscription merupakan core features dari graphql yang digunakan untuk mendapatkan update data secara real-time. subscription membutuhkan web-socket(atau semacamnya) agar dapat bekerja. Subscription bekerja selayaknya refetchQueries pada useMutation namun dengan subscription, data akan didapat secara real-time dan otomatis, tidak perlu me-listen satu-persatu seperti refetchQueries

- Kenapa menggunakan Subscription?
Small, incremental changes to large objects, Low-latency, real-time updates

#### Cara Menggunakan Subscription
1. Untuk penggunaan `Subscription` pada documentasi kita harus 
menginstall library dengan cara `npm install graphql-ws`

2. Inisialisasi GraphQLWsLink

```js
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
  })
);
```

3. Membagi komunikasi Berdasarkan operasinya

```js
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
  })
);
// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
```

4. Provide link ke apollo Client

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";
// ...code from the above example goes here...
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
```

5. Otentitkasi dengan web socket (opsional)

```js
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
    connectionParams: {
      authToken: user.authToken,
    },
  })
);
```

#### Hasil Praktikum
![subscriptionDemo](screenshot_praktikum/subscription_demo.gif)