import { Link, useParams } from 'react-router-dom';
import { useStages } from 'services/hooks/useStages';

interface ParamTypes {
  pageId: string;
}

export default function Stages() {
  const { pageId } = useParams<ParamTypes>();
  const query = useStages(pageId);

  return (
    <div>
      Stages
      <ul>
        {query.data &&
          query.data.data.stages.map((stage) => (
            <li key={stage.id}>
              <Link to={`/pages/${stage.pageId}`}>{stage.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
