function objectify(array)
{
    var object = {};
    for (i = 0; i < array.length; i++)
    {
        var key = array[i][0];
        object [key] = array[i][1];
    }
    return object;
}

console.log(objectify([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]))

console.log(objectify([
    ['key', 12],
    ['another key', 47],
    ['yet a third key', 88]
]))

console.log(objectify([
    ['S', "O"],
    ['P', "W"],
    ['A', "L"],
    ['C', "S"],
    ['E', "S"],
])) 

console.log(objectify([
    ['Fname', "Manpreet"],
    ['lastName', "Kaur"],
    ['Age', "20"],
    ['City', "Surrey"],
    ['Email', "kaurm@gmail.com"],
])) 
