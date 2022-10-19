// 배달
// 다익스트라 알고리즘

function solution(N, road, K) {
  const deliveryTime = Array(N + 1).fill(500000);
  deliveryTime[1] = 0;
  const queue = [];
  queue.push({ to: 1, time: 0 });
  const roads = Array.from({ length: N + 1 }, () => []);
  road.forEach(([v1, v2, t]) => {
    roads[v1].push({ to: v2, time: t });
    roads[v2].push({ to: v1, time: t });
  });

  while (queue.length) {
    let { to } = queue.shift();
    roads[to].forEach(v => {
      if (deliveryTime[v.to] > deliveryTime[to] + v.time) {
        deliveryTime[v.to] = deliveryTime[to] + v.time;
        queue.push(v);
      }
    });
  }
  return deliveryTime.filter(x => x <= K).length;
}
