import * as React from "react";
import { useLoaderData } from "react-router-dom";
import ResourcesList from "./ResourceList/ResourcesList";
import { gql } from "../__generated__/gql";
import { useSuspenseQuery } from "@apollo/client";
import { ProjectQueryQuery } from "../__generated__/graphql";

const ProjectQuery = gql(/* GraphQL */ `
  query ProjectQuery($id: ID!) {
    project: node(id: $id) {
      ...on Project {
        name
        description
        isDefault
        createdAt
        ...ResourcesList_ProjectFragment
      }
    }
  }
`)

const ProjectIcon = ({ timestamp }: { timestamp: number }) => {
  return (
    <div className="h-32 w-32 p-4">
      <img className="w-full h-full rounded" src={`https://loremflickr.com/70/70?lock=${timestamp}`} alt="" />
    </div>
  );
}

const IsDefault = ({isDefault}: {isDefault: boolean}) => {
  if (!isDefault) {
    return null;
  }

  return (
    <button type="button" className="rounded-full px-4 bg-gray-500 text-black p-2 leading-none flex items-center">
      DEFAULT
    </button>
  );
}

interface Props {
  id: string
}

type ProjectType = Extract<ProjectQueryQuery['project'], { __typename: 'Project' }>

export default function Project() {
  const props = useLoaderData() as Props;
  console.log('ProjectQuery', ProjectQuery);
  const { error, data } = useSuspenseQuery(ProjectQuery, {
    errorPolicy: "all",
    variables: { id: props.id }
  });
  console.log('project errors', error)
  if (!data || !data.project) {
    throw new Error('no data???');
  }
  const project = data.project as ProjectType;

  return (
    <React.Suspense>
      <div className="flex justify-between flex-col">
        <div className="flex flex-row">
          <div>
            <ProjectIcon timestamp={new Date(project.createdAt).getTime()} />
          </div>
          <div className="m-4">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{project.name}</h2>
            <IsDefault isDefault={project.isDefault} />
            <p>{project.description}</p>
          </div>
        </div>
        <div className="bg-white">
          <nav className="flex flex-col sm:flex-row border-b-2">
            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium border-blue-500">
              Resources
            </button>
            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
              Activity
            </button>
            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
              Settings
            </button>
          </nav>
          <ResourcesList project={project} />
        </div>
      </div>
    </React.Suspense>
  );
}

