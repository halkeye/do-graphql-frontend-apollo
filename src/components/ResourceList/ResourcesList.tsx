import { FragmentType, useFragment } from "../../__generated__";
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


  const resourceByType = data.resources.edges.filter(
    edge => Boolean(edge.node)
  ).reduce((prev, edge) => {
    prev[edge.node.resource?.__typename] ||= []
    prev[edge.node.resource?.__typename].push(edge.node)
    return prev
  },
    {}
  );

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
                      <td>{resource.resource?.name}</td>
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