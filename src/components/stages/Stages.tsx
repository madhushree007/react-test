import { Link, useHistory, useParams } from 'react-router-dom';
import { useStages } from 'services/hooks/useStages';
import styles from './Stages.module.scss';

interface ParamTypes {
  pageId: string;
}

export default function Stages() {
  const { pageId } = useParams<ParamTypes>();
  const query = useStages(pageId);
  let history = useHistory();

  // While data is loading
  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  // If erre occured give a refresh option
  if (query.error) {
    return (
      <div>
        <p>Something went wrong</p>
        <button onClick={() => query.refetch()}>Refetch</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Stages</h2>
      <button onClick={() => history.goBack()}>Back</button>
      <ul className={styles.stages}>
        {query.data &&
          query.data.data.stages.map((stage) => (
            <li key={stage.id}>
              <div>
                <Link to={`/pages/${stage.pageId}`}>{stage.name}</Link>
              </div>
              <div>
                <Link to={`/pages/${stage.pageId}`}>Number of links ({stage.linksCount})</Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
