import PropTypes from 'prop-types';
import styles from './SortControls.module.css';

const SortControls = ({ sortBy, sortDirection, toggleSort, toggleDirection }) => {
  return (
    <div className={styles.controls}>
      <button className={styles.sortButton} onClick={toggleSort}>
        Sort by: {sortBy === 'date' ? 'Date' : 'Alphabet'}
      </button>
      <button className={styles.sortButton} onClick={toggleDirection}>
        Direction: {sortDirection === 'asc' ? '⇧' : '⇩'}
      </button>
    </div>
  );
};

SortControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  toggleSort: PropTypes.func.isRequired,
  toggleDirection: PropTypes.func.isRequired,
};

export default SortControls;
