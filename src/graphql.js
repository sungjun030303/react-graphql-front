import gql from 'graphql-tag'

export const ME = gql`
  query me {
    user(login: "sungjun030303") {
      name
      avatarUrl
    }
  }
`



