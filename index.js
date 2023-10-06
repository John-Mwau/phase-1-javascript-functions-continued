function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

function mondayWork(day="go to the office"){
      return `This Monday, I will ${day}.`
}
mondayWork("work from home");

function wrapAdjective(adjective='*'){
    return function result(adjective = '||') {
        return `You are ${wrapper}${adjective}${wrapper}!`;
      };
}