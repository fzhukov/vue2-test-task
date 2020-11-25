export const formatDate = (date) => {
  return `${date.getHours() + 1}ч:${date.getMinutes()}м:${date.getSeconds()}с, ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};