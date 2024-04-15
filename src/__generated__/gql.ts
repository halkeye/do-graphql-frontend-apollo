/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query ProjectQuery($id: ID!) {\n    project: node(id: $id) {\n      ...on Project {\n        name\n        description\n        isDefault\n        createdAt\n        ...ResourcesList_ProjectFragment\n      }\n    }\n  }\n": types.ProjectQueryDocument,
    "\n  fragment ResourcesList_ProjectFragment on Project {\n    resources(first: 100) {\n      edges {\n        node {\n          status\n          id\n          resource {\n            id\n            name\n            __typename\n          }\n        }\n      }\n    }\n  }\n": types.ResourcesList_ProjectFragmentFragmentDoc,
    "\n  query SidebarQuery {\n    projects(first: 100) {\n      edges {\n        node {\n          name\n          id\n        }\n      }\n    }\n  }\n": types.SidebarQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ProjectQuery($id: ID!) {\n    project: node(id: $id) {\n      ...on Project {\n        name\n        description\n        isDefault\n        createdAt\n        ...ResourcesList_ProjectFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProjectQuery($id: ID!) {\n    project: node(id: $id) {\n      ...on Project {\n        name\n        description\n        isDefault\n        createdAt\n        ...ResourcesList_ProjectFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ResourcesList_ProjectFragment on Project {\n    resources(first: 100) {\n      edges {\n        node {\n          status\n          id\n          resource {\n            id\n            name\n            __typename\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ResourcesList_ProjectFragment on Project {\n    resources(first: 100) {\n      edges {\n        node {\n          status\n          id\n          resource {\n            id\n            name\n            __typename\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SidebarQuery {\n    projects(first: 100) {\n      edges {\n        node {\n          name\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SidebarQuery {\n    projects(first: 100) {\n      edges {\n        node {\n          name\n          id\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;