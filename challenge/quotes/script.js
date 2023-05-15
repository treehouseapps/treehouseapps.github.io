var quote = [
    'If You Expect Disappointment, Then You Can Never Really Get Disappointed.',
    'I mean I can do it when i am very relaxed, and with good friends, then I think I can be amusing.',
    'This is water. What I want is the ocean.',
    'Never lie, steal, cheat, or drink. But if you must lie, lie in the arms of the one you love. If you must steal, steal away from bad company. If you must cheat, cheat death. And if you must drink, drink in the moments that take your breath away.',
    'Wataguan Man',
    'Come to Dubai',
    'Hello world',
    'Boom shaka laka',
    'ay yoo is yo hommie bbeki junior',
    'Astalavista',
]
var autor = [
    'Michelle “MJ”',
    'Rowan Atkinson',
    'Soul, Movie',
    'Hitch, Movie',
    'Comedian tomas',
    'Random Arab',
    'Known code print',
    'Random Rege',
    'intro for my self',
    'From rio movie',
]
function fun() {
    var rq = Math.floor(Math.random() * (quote.length));
    var a = document.getElementById("result");
    var b = document.getElementById("autor");

    a.innerHTML = '" ' + quote[rq] + ' "';
    b.innerHTML = autor[rq];
}