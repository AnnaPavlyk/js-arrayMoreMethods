function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    const percentOfSuccess = (item.athletes > 0)
      ? ((item.medals / item.athletes) * 100).toFixed(1)
      : 0; 

    return {
      ...item,
      percentOfSuccess: `${percentOfSuccess}%`
    };
  });
}

const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 },
  { sport: 'Archery', athletes: 0, medals: 0 } 
];

console.log(addSuccessPercent(olympicRepresentation));
module.exports = addSuccessPercent;
