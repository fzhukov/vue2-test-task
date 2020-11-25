export const getStatusName = (status) => {
  switch(status) {
    case 'added':
      return 'Added';
    case 'deleted':
      return 'Deleted';
    default:
      return '#ERROR';
  }
};
