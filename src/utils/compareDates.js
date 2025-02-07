function compareDates(compareValue, spentAt, comparisonDate) {
  if (compareValue === 'from') {
    return new Date(spentAt) >= new Date(comparisonDate);
  }

  if (compareValue === 'to') {
    return new Date(spentAt) <= new Date(comparisonDate);
  }
}

module.exports = {
  compareDates,
};
