var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{return [element, ...array]}

function destuctivelyAddElementToBeginningOfArray(array, element) [array.unshift(element)] {return array}