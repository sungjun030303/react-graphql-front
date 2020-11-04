
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { HttpLink } from '@apollo/client';
// 옛날 버전이라 위에 방식이 안됨.
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// import { ApolloClient } from 'apollo-boost'
// const client = new ApolloClient();
const endpoint = 'https://api.github.com/graphql'
const httpLink = new HttpLink({ uri: endpoint })
const  GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
console.log(GITHUB_TOKEN)

const headersLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    })
    return forward(operation)
  })
// 강의 옛날 것

const link = ApolloLink.from([headersLink, httpLink])

export default new ApolloClient({
  link ,
  cache: new InMemoryCache()

})




