/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Time */
  Time: { input: any; output: any; }
  /** UUID */
  UUID: { input: any; output: any; }
};

/** Account Information */
export type Account = Node & {
  __typename: 'Account';
  /** Email address */
  email: Scalars['String']['output'];
  /** Has email been verified */
  emailVerified: Scalars['Boolean']['output'];
  /** The id of the account */
  id: Scalars['ID']['output'];
  /** Account Status */
  status: Scalars['String']['output'];
  /** Team */
  team: Team;
  /** Account UUID */
  uuid: Scalars['String']['output'];
};

/** Account Limits */
export type AccountLimits = {
  __typename: 'AccountLimits';
  /** How many droplets can you have at once */
  dropletLimit: Scalars['Int']['output'];
  /** How many volumes can you have at once */
  volumeLimit: Scalars['Int']['output'];
};

export type App = Node & Resource & {
  __typename: 'App';
  createdAt: Scalars['Time']['output'];
  defaultIngress?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastDeploymentActiveAt?: Maybe<Scalars['Time']['output']>;
  name: Scalars['String']['output'];
  owner: Team;
  updatedAt?: Maybe<Scalars['Time']['output']>;
};

export type Dbaas = Node & Resource & {
  __typename: 'Dbaas';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Domain = Node & Resource & {
  __typename: 'Domain';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ttl: Scalars['Int']['output'];
  zoneFile?: Maybe<Scalars['String']['output']>;
};

export type Droplet = Node & Resource & {
  __typename: 'Droplet';
  backupIDs: Array<Scalars['Int']['output']>;
  disk?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  memory?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  region?: Maybe<Region>;
  sizeSlug?: Maybe<Scalars['String']['output']>;
  vcpus?: Maybe<Scalars['Int']['output']>;
};

export type KubernetesCluster = Node & Resource & {
  __typename: 'KubernetesCluster';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Projects allow you to organize your resources into groups that fit the way you work. You can group resources (like Droplets, Spaces, load balancers, domains, and floating IPs) in ways that align with the applications you host on DigitalOcean. */
export type Project = Node & {
  __typename: 'Project';
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  environment: Scalars['String']['output'];
  /** The id of the account */
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  owner: Team;
  purpose: Scalars['String']['output'];
  /** Project Resources */
  resources: ProjectResourcesConnection;
  updatedAt?: Maybe<Scalars['Time']['output']>;
};


/** Projects allow you to organize your resources into groups that fit the way you work. You can group resources (like Droplets, Spaces, load balancers, domains, and floating IPs) in ways that align with the applications you host on DigitalOcean. */
export type ProjectResourcesArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectResource = {
  __typename: 'ProjectResource';
  assignedAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  resource: Resource;
  status: Scalars['String']['output'];
};

/** ProjectResources Connection */
export type ProjectResourcesConnection = {
  __typename: 'ProjectResourcesConnection';
  /** Edges */
  edges: Array<ProjectResourcesEdge>;
  /** Pagination info */
  pageInfo: PageInfo;
};

/** ProjectResources Edge */
export type ProjectResourcesEdge = {
  __typename: 'ProjectResourcesEdge';
  /** Cursor */
  cursor: Scalars['ID']['output'];
  /** Project Node */
  node: ProjectResource;
};

/** Projects Connection */
export type ProjectsConnection = {
  __typename: 'ProjectsConnection';
  /** Edges */
  edges: Array<ProjectsEdge>;
  /** Pagination info */
  pageInfo: PageInfo;
};

/** Project Edge */
export type ProjectsEdge = {
  __typename: 'ProjectsEdge';
  /** Cursor */
  cursor: Scalars['ID']['output'];
  /** Project Resource Node */
  node: Project;
};

/** All the queries */
export type Query = {
  __typename: 'Query';
  /** Account Information */
  account: Account;
  /** Get node */
  node?: Maybe<Node>;
  /** All projects */
  projects: ProjectsConnection;
};


/** All the queries */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** All the queries */
export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Region = Node & {
  __typename: 'Region';
  available?: Maybe<Scalars['Boolean']['output']>;
  features: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sizes: Array<Scalars['String']['output']>;
};

export type Resource = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Not actually implemented as it doesn't return from api */
export type Space = Node & Resource & {
  __typename: 'Space';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Team information */
export type Team = Node & {
  __typename: 'Team';
  /** The id of the team */
  id: Scalars['ID']['output'];
  /** What is the teams limits */
  limits?: Maybe<AccountLimits>;
  /** Team UUID */
  uuid: Scalars['UUID']['output'];
};

export type Volume = Node & Resource & {
  __typename: 'Volume';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ProjectQueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProjectQueryQuery = { __typename: 'Query', project?: { __typename: 'Account' } | { __typename: 'App' } | { __typename: 'Dbaas' } | { __typename: 'Domain' } | { __typename: 'Droplet' } | { __typename: 'KubernetesCluster' } | (
    { __typename: 'Project', name: string, description?: string | null, isDefault: boolean, createdAt: any }
    & { ' $fragmentRefs'?: { 'ResourcesList_ProjectFragmentFragment': ResourcesList_ProjectFragmentFragment } }
  ) | { __typename: 'Region' } | { __typename: 'Space' } | { __typename: 'Team' } | { __typename: 'Volume' } | null };

export type ResourcesList_ProjectFragmentFragment = { __typename: 'Project', resources: { __typename: 'ProjectResourcesConnection', edges: Array<{ __typename: 'ProjectResourcesEdge', node: { __typename: 'ProjectResource', status: string, id: string, resource: { __typename: 'App', id: string, name: string } | { __typename: 'Dbaas', id: string, name: string } | { __typename: 'Domain', id: string, name: string } | { __typename: 'Droplet', id: string, name: string } | { __typename: 'KubernetesCluster', id: string, name: string } | { __typename: 'Space', id: string, name: string } | { __typename: 'Volume', id: string, name: string } } }> } } & { ' $fragmentName'?: 'ResourcesList_ProjectFragmentFragment' };

export type SidebarQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SidebarQueryQuery = { __typename: 'Query', projects: { __typename: 'ProjectsConnection', edges: Array<{ __typename: 'ProjectsEdge', node: { __typename: 'Project', name: string, id: string } }> } };

export const ResourcesList_ProjectFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResourcesList_ProjectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resources"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"resource"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ResourcesList_ProjectFragmentFragment, unknown>;
export const ProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"project"},"name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResourcesList_ProjectFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResourcesList_ProjectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resources"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"resource"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectQueryQuery, ProjectQueryQueryVariables>;
export const SidebarQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SidebarQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SidebarQueryQuery, SidebarQueryQueryVariables>;