// code your solution here
/*Implement a function called saturdayFun:

It should define a function.
It uses a default argument, 'roller-skate' when no arguments are passed.
It allows the default argument to be overridden.
Implement a function called mondayWork:

It should define a function.
It uses a default argument, 'go to the office' when no arguments are passed.
It allows the default argument to be overridden.
Implement a function called wrapAdjective:

It should return a function. This "inner" function should:
take a single parameter that should default to "special". Name it however you wish.
return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
It should take as parameter a String that will be used to create visual flair.
You may call the parameter whatever you like, but its default value should be "*".
Call example: const encouragingPromptFunction = wrapAdjective("!!!")
Thus a total call should be:

wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
*/
// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }


