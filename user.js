function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YgmUBEnxpg":
        Script1();
        break;
      case "6miZjV1VsbM":
        Script2();
        break;
      case "6GEma6LAPyJ":
        Script3();
        break;
      case "6d8dCgS1u6x":
        Script4();
        break;
      case "6HOUeDKqTvO":
        Script5();
        break;
      case "6cVRsNbHw5q":
        Script6();
        break;
      case "5V1DESfwNrd":
        Script7();
        break;
      case "5wKeIkdpSQL":
        Script8();
        break;
      case "6VVj7bClXud":
        Script9();
        break;
      case "5b1Fuz7rUSA":
        Script10();
        break;
      case "5wpUQoVNHRG":
        Script11();
        break;
      case "6bltv79lu1v":
        Script12();
        break;
      case "6kNSAVU5cVe":
        Script13();
        break;
      case "5g6Ci0gm9Mb":
        Script14();
        break;
      case "5br4sUzDu68":
        Script15();
        break;
      case "62cXNvk0MMm":
        Script16();
        break;
      case "66imlpwY3mi":
        Script17();
        break;
      case "6PFQmIUQeUW":
        Script18();
        break;
      case "5oVbdVo3igH":
        Script19();
        break;
      case "623197GqPS9":
        Script20();
        break;
      case "5pPmOhpVKqK":
        Script21();
        break;
      case "5juheW1wZBt":
        Script22();
        break;
      case "6GJNtqCTkVr":
        Script23();
        break;
      case "5sUuOXRemok":
        Script24();
        break;
      case "5leYMHyRk72":
        Script25();
        break;
      case "6RDzoPldcRo":
        Script26();
        break;
      case "6P0CxqFOuMT":
        Script27();
        break;
      case "6PSu8A4pFhU":
        Script28();
        break;
      case "5kF4jhYumBk":
        Script29();
        break;
      case "6GTRffLE53F":
        Script30();
        break;
      case "6XayInRqiSn":
        Script31();
        break;
      case "5iH6GeAHC2H":
        Script32();
        break;
      case "6WI8WVzezGi":
        Script33();
        break;
      case "5eyVnohxuGh":
        Script34();
        break;
      case "5lqvFD8L0ix":
        Script35();
        break;
      case "68TZcqZQDgF":
        Script36();
        break;
      case "6DzDGAL5dej":
        Script37();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6cclB1ScF3L');
const duration = 750;
const easing = 'ease-out';
const id = '66oQ5YiLJ1Z';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6cclB1ScF3L');
const duration = 750;
const easing = 'ease-out';
const id = '66oQ5YiLJ1Z_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5vKD7X6xP3f');
const duration = 750;
const easing = 'ease-out';
const id = '6BfmVYfsDIt';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5vKD7X6xP3f');
const duration = 750;
const easing = 'ease-out';
const id = '6BfmVYfsDIt_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('65FyKABE1bO');
const duration = 750;
const easing = 'ease-out';
const id = '6JYri6xiAR9';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('65FyKABE1bO');
const duration = 750;
const easing = 'ease-out';
const id = '6JYri6xiAR9_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6GTxGCXZeWE');
const duration = 750;
const easing = 'ease-out';
const id = '5kwix2PEWhp';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6O8RakgIF2d');
const duration = 750;
const easing = 'ease-out';
const id = '6PgltBLgSX9';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6O8RakgIF2d');
const duration = 750;
const easing = 'ease-out';
const id = '6PgltBLgSX9_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6KDipguzMoa');
const duration = 750;
const easing = 'ease-out';
const id = '5naHeH30Lx7';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('5ivCZnhLUCE');
const duration = 750;
const easing = 'ease-out';
const id = '67l4jwYWB9G';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5ivCZnhLUCE');
const duration = 750;
const easing = 'ease-out';
const id = '67l4jwYWB9G_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5ivCZnhLUCE');
const duration = 750;
const easing = 'ease-out';
const id = '67l4jwYWB9G';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6dl1M86qS6i');
const duration = 750;
const easing = 'ease-out';
const id = '5ykFga0fz3U';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6dl1M86qS6i');
const duration = 750;
const easing = 'ease-out';
const id = '5ykFga0fz3U_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6dl1M86qS6i');
const duration = 750;
const easing = 'ease-out';
const id = '5ykFga0fz3U';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6Q8MBUeknAN');
const duration = 750;
const easing = 'ease-out';
const id = '5tPovHKRw28';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6Q8MBUeknAN');
const duration = 750;
const easing = 'ease-out';
const id = '5tPovHKRw28_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6Q8MBUeknAN');
const duration = 750;
const easing = 'ease-out';
const id = '5tPovHKRw28';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('5duCYOVkQNs');
const duration = 750;
const easing = 'ease-out';
const id = '63rliYBzDWs';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('5duCYOVkQNs');
const duration = 750;
const easing = 'ease-out';
const id = '63rliYBzDWs_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5duCYOVkQNs');
const duration = 750;
const easing = 'ease-out';
const id = '63rliYBzDWs';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('5XdSZjfjJJ8');
const duration = 750;
const easing = 'ease-out';
const id = '5pdRltm3a3b';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5XdSZjfjJJ8');
const duration = 750;
const easing = 'ease-out';
const id = '5pdRltm3a3b_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('5XdSZjfjJJ8');
const duration = 750;
const easing = 'ease-out';
const id = '5pdRltm3a3b';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6U6hyrAFrcL');
const duration = 750;
const easing = 'ease-out';
const id = '67szn9x2yBy';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6U6hyrAFrcL');
const duration = 750;
const easing = 'ease-out';
const id = '67szn9x2yBy_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('6U6hyrAFrcL');
const duration = 750;
const easing = 'ease-out';
const id = '67szn9x2yBy';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('6HnwB3lmJOB');
const duration = 750;
const easing = 'ease-out';
const id = '5vK5IdinTDq';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6HnwB3lmJOB');
const duration = 750;
const easing = 'ease-out';
const id = '5vK5IdinTDq_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6HnwB3lmJOB');
const duration = 750;
const easing = 'ease-out';
const id = '5vK5IdinTDq';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('6NB3yUW1zen');
const duration = 750;
const easing = 'ease-out';
const id = '6WC3nRZZKzq';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6NB3yUW1zen');
const duration = 750;
const easing = 'ease-out';
const id = '6WC3nRZZKzq_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('6NB3yUW1zen');
const duration = 750;
const easing = 'ease-out';
const id = '6WC3nRZZKzq';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  player.once(() => {
const target = object('6IaWzjRPFlM');
const duration = 750;
const easing = 'ease-out';
const id = '6PvwjI4HPhA';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  const target = object('5sS62aHnCI8');
const duration = 750;
const easing = 'ease-out';
const id = '5jRfyqxT9xK';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('5sS62aHnCI8');
const duration = 750;
const easing = 'ease-out';
const id = '5jRfyqxT9xK_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
