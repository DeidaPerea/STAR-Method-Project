function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eSJIs0MTCD":
        Script1();
        break;
      case "6PFzjX47Z4D":
        Script2();
        break;
      case "6HsLJ37zVva":
        Script3();
        break;
      case "5VR2Cbo886c":
        Script4();
        break;
      case "64l0jefhO87":
        Script5();
        break;
      case "5z6UO2Eafn4":
        Script6();
        break;
      case "5dvrEpMeiru":
        Script7();
        break;
      case "677KFdTB7Mh":
        Script8();
        break;
      case "6j441SOIjfn":
        Script9();
        break;
      case "67UZ95t4JIR":
        Script10();
        break;
      case "5ud34DNVInT":
        Script11();
        break;
      case "5eqVP8tpQVi":
        Script12();
        break;
      case "69ORl7yVlW0":
        Script13();
        break;
      case "5o9rXk6IKdU":
        Script14();
        break;
      case "6FueCyyejLK":
        Script15();
        break;
      case "5aEYjvtRyGz":
        Script16();
        break;
      case "6XCLBUFXTSr":
        Script17();
        break;
      case "6AfdLm6TsjU":
        Script18();
        break;
      case "5ujdugnNhAu":
        Script19();
        break;
      case "6PGMgyfQcbn":
        Script20();
        break;
      case "5dKDPaax4lN":
        Script21();
        break;
      case "5X0mPiOCV3I":
        Script22();
        break;
      case "6f6h7IHjLAV":
        Script23();
        break;
      case "6AYcHPW2AHy":
        Script24();
        break;
      case "6jDFGikxTHb":
        Script25();
        break;
      case "6cNGNSIGgSo":
        Script26();
        break;
      case "5c5PrDhIfle":
        Script27();
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
  player.once(() => {
const target = object('6DY6m76XlBh');
const duration = 750;
const easing = 'ease-out';
const id = '6gQVebksYVH';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5lpCeFymDrE');
const duration = 750;
const easing = 'ease-out';
const id = '6bYJqnjjJol';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6XpRelVPFR1');
const duration = 750;
const easing = 'ease-out';
const id = '5vWoqJ2kWpM';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5pRnipJPcKt');
const duration = 750;
const easing = 'ease-out';
const id = '6TwTL1IbjaR';
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

window.Script5 = function()
{
  const target = object('6IUiIU0UBG6');
const duration = 750;
const easing = 'ease-out';
const id = '6BVBtubLMZ1';
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
  player.once(() => {
const target = object('6HD1fpKyGep');
const duration = 750;
const easing = 'ease-out';
const id = '6WEB4k5Eqqk';
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

window.Script7 = function()
{
  const target = object('62YFrTReSwu');
const duration = 750;
const easing = 'ease-out';
const id = '6DGUHihcDhO';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5wRyJ5XDUQ7');
const duration = 750;
const easing = 'ease-out';
const id = '6ZlWX6Mlrra';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6aHcp5GZUdu');
const duration = 750;
const easing = 'ease-out';
const id = '5r6rqL2wmGR';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5WtvFkdQebB');
const duration = 750;
const easing = 'ease-out';
const id = '63W0stLwu7R';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6XdTq3zR78V');
const duration = 750;
const easing = 'ease-out';
const id = '5ZmN5PxHV2z';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6loHTDj8Gu2');
const duration = 750;
const easing = 'ease-out';
const id = '5rQBix8eS2t';
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

window.Script13 = function()
{
  const target = object('6loHTDj8Gu2');
const duration = 750;
const easing = 'ease-out';
const id = '5rQBix8eS2t_reverse';
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

window.Script14 = function()
{
  const target = object('6qqaTjXI4Dq');
const duration = 750;
const easing = 'ease-out';
const id = '5em3WHkw6aM';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('5nYphsb9zog');
const duration = 750;
const easing = 'ease-out';
const id = '5WKdMbBdwji';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('5eJ3V9dBBq1');
const duration = 750;
const easing = 'ease-out';
const id = '5eDJZo0GwQZ';
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
  const target = object('6KlyYc6zx3I');
const duration = 750;
const easing = 'ease-out';
const id = '5jyDFFXMZUz';
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
  const target = object('68WHStqwC0y');
const duration = 750;
const easing = 'ease-out';
const id = '5ghOFkdBK8S';
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

window.Script19 = function()
{
  const target = object('5ali7MbLvNZ');
const duration = 750;
const easing = 'ease-out';
const id = '5fcIHFA4e2V';
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
  const target = object('5jmcZ0CiEr9');
const duration = 750;
const easing = 'ease-out';
const id = '6Gk7jFuZreZ';
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
  player.once(() => {
const target = object('5hOPK29vmii');
const duration = 750;
const easing = 'ease-out';
const id = '6CGCBRDX31y';
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

window.Script22 = function()
{
  const target = object('6ACkdCJH7Lx');
const duration = 750;
const easing = 'ease-out';
const id = '6KMo6NvWAiA';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('5ygUrWNNM56');
const duration = 750;
const easing = 'ease-out';
const id = '6fyJTVYDvbg';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6k8YR8pdo5F');
const duration = 750;
const easing = 'ease-out';
const id = '6N293Z4EMhf';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6FCbt03imYK');
const duration = 750;
const easing = 'ease-out';
const id = '5wmtFsOEmjR';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6Lu4jUEBing');
const duration = 750;
const easing = 'ease-out';
const id = '5qH80L4pyLZ';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6G2xuw6x8mi');
const duration = 750;
const easing = 'ease-out';
const id = '5w8BeoIcqsk';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
