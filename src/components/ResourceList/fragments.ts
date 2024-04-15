import { gql } from "../../__generated__/gql";

export const ResourcesList_ProjectFragment = gql(/* GraphQL */ `
  fragment ResourcesList_ProjectFragment on Project {
    resources(first: 100) {
      edges {
        node {
          status
          id
          resource {
            id
            name
            __typename
          }
        }
      }
    }
  }
`)