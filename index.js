"use strict"

var now = new Date()

var clock = {
  0: {
     0: '🕛',
    30: '🕧'
  },
  1: {
     0: '🕐',
    30: '🕜'
  },
  2: {
     0: '🕑',
    30: '🕝'
  },
  3: {
     0: '🕒',
    30: '🕞'
  },
  4: {
     0: '🕓',
    30: '🕟'
  },
  5: {
     0: '🕔',
    30: '🕠'
  },
  6: {
     0: '🕕',
    30: '🕡'
  },
  7: {
     0: '🕖',
    30: '🕢'
  },
  8: {
     0: '🕗',
    30: '🕣'
  },
  9: {
     0: '🕘',
    30: '🕤',
  },
  10: {
     0: '🕙',
    30: '🕥'
  },
  11: {
     0: '🕚',
    30: '🕦'
  }
}

module.exports = function () {
  var hour = now.getHours()
  var min = now.getMinutes()
  if (hour >= 12) hour -= 12
  if (min < 15) min = 0
  else if (min < 45) min = 30
  else {
    if (++ hour >= 12) hour = 0
    min = 0
  }
  return clock[hour][min]
}
