import { FragmentType, useFragment } from "../../__generated__";
import { ResourcesList_ProjectFragmentFragment } from "../../__generated__/graphql";
import { ResourcesList_ProjectFragment } from "./fragments";

const Status = ({ status }: { status: string }) => {
  return (
    <button type="button" className="rounded-full px-4 mr-2 bg-green-600 text-white p-2 leading-none flex items-center">
      {status}
    </button>
  );
}

type ResourcesListProps = {
  project: FragmentType<typeof ResourcesList_ProjectFragment>
}

export default function ResourcesList(props: ResourcesListProps) {
  const data = useFragment(ResourcesList_ProjectFragment, props.project);
  console.log('ResourcesList', data);
  if (!data || !data.resources) {
    throw new Error('no data???');
  }

  const resourceByType = {} as Record<string, Array<ResourcesList_ProjectFragmentFragment['resources']['edges'][0]['node']>>
  for (const edge of data.resources.edges) {
    if (!edge || !edge.node || !edge.node.resource || !edge.node.resource.__typename) {
      continue;
    }
    if (!resourceByType[edge.node.resource.__typename]) {
      resourceByType[edge.node.resource.__typename as string] = []
    }
    resourceByType[edge.node.resource.__typename].push(edge.node)
  }

  return (
    <>
      {Object.entries(resourceByType).map(([__typename, resources]) => (
        <div key={__typename}>
          <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{__typename} ({resources.length})</h2>
          <div className="border-2">
            <table className="table-auto">
              <tbody>
                {resources.map(resource => {
                  return (
                    <tr key={resource.id}>
                      <td><Status status={resource.status} /></td>
                      <td>{resource.resource.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}