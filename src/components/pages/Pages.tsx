import { Link } from 'react-router-dom';
import { usePages } from 'services/hooks/usePages';
import styles from './Pages.module.scss';

export default function Pages() {
  const query = usePages();

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
      <h2>Process Name</h2>
      <ul className={styles.pages}>
        {query.data &&
          query.data.data.pages.map((page) => (
            <li key={page.id}>
              <div>
                <Link to={`/pages/${page.id}`}>
                  {page.name} <span>- {page.type}</span>
                </Link>
                <p>{page.published ? 'published' : 'not published'}</p>
              </div>
              <div>
                <Link to={`/pages/${page.id}`}>Number of stages ({page.stagesCount})</Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
