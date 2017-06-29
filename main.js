var sentences= "I once ate a frog who sat on a log"
var wordSent= sentences.split(' ')
var li= document.createElement('li')
// 1
document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement('button')
    document.getElementById('1').appendChild(button)
    button.addEventListener('click', myAlert)
    function myAlert(){
        console.log('workd')
        alert ('nice message')
    }
})
// 2
TB.addEventListener('click', myText)
function myText (){
alert (document.getElementById("textbutt").value)

}
// 3
hovDiv.addEventListener('mouseover', myHover)
function myHover(){
    hovDiv.style.backgroundColor = "red"
}
hovDiv.addEventListener('mouseleave', myExit)
function myExit(){
    hovDiv.style.backgroundColor = "green"
}
// 4
para.addEventListener('click', myClick)
function myClick(){
    var Color = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]
            var rand = Color[Math.floor(Math.random() * Color.length)]
    para.style.color = rand
}
// 5
mkSpan.addEventListener('click', myName)
function myName(){
    var span= document.createElement('span');
    span.innerHTML = 'Dylan'
    document.getElementById('thing').appendChild(span)   
}
// 6
var fakeFriends = ['Elmo', 'Big Bird', 'Cookie Monster', "Rick", "Morty", "Larry", "Dwayne", "Wilbur", "Charlotte", "Orwell" ]
// friendCounter=-1
friends.addEventListener('click', myDelusions)
function myDelusions(){
    for(i=0; i<fakeFriends.length; i++){
       var li= document.createElement('li');
       li.innerHTML= fakeFriends[i];
       document.getElementById('list').appendChild(li)
    }    
        for (i=0; i<fakeFriends.length; i++){
            // var li= document.createElement('li')
            li.innerHTML=''
            li.innerHTML=wordSent[i];
            document.getElementById('list').appendChild(li)
}
}