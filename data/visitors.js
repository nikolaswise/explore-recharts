function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomFloat(max) {
  return Math.floor(Math.random() * Math.floor(max * 100)) / 100;
}

export const VisitorsDaily = (days) => {
  let today = Date.now();
  let data = new Array(days)
    .fill({})
    .map((k, i) => {
      return {
        visitors: getRandomInt(500)
      }
    })
  console.log(data)

  return data
}
