import * as React from "react";
import { useSuspenseQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import { gql } from "../__generated__/gql";

export const SidebarQuery = gql(/* GraphQL */ `
  query SidebarQuery {
    projects(first: 100) {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`);

export default function Sidebar(): React.ReactElement {
  const { data } = useSuspenseQuery(SidebarQuery);
  if (!data || !data.projects) {
    throw new Error('no data???');
  }

  console.log('sidebar', data);
  return <>
    {[...data.projects.edges].sort((a, b) => a.node.name.localeCompare(b.node.name)).map(({node: project}) => {
      return (
        <NavLink 
          key={project.id}
          className={({ isActive }) => {
            return `flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 ${isActive ? 'bg-blue-300' : ''}`
          }}
          to={`/projects/${project.id}`}
        >
          <span className="leading-none">{project.name}</span>
        </NavLink>
      )
    })}
  </>;
}