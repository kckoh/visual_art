var j
var answer = [[98.26749581216632, 238.7698966170051]
, [342.7835448485863, 359.1640871809376]
, [296.53536230963726, 368.8954012179606]
, [54.22633537861466, 165.4341193982778]
, [450.8833088929393, 370.0439425903723]
, [234.33700985693895, 154.51887612908342]
, [324.8680130293912, 363.4357692995907]
, [86.09529824353102, 356.1837877429746]
, [42.050148937457735, 86.85296355814631]
, [105.24754902937372, 18.838883005334207]
, [16.67886058690482, 392.1428494013589]
, [498.64049284579426, 108.26617388679205]
, [308.36049483813997, 391.1776262485708]
, [424.8814081575463, 381.58621197966767]
, [331.36181541576883, 167.84532812203545]
, [277.1079928573946, 307.75336269844513]
, [97.35915785039539, 497.39254866586026]
, [183.57827885239996, 60.11025606136911]
, [0.9598586968790901, 25.747168313381643]
, [220.75190462495232, 304.585197854939]
, [392.0925930463649, 411.3574260077436]
, [61.084793722048225, 238.54467672627277]
, [348.1597700446275, 419.67817406447983]
, [254.7518235846782, 66.0358385882499]
, [110.7684765218253, 297.8310888932274]
, [235.80048172495526, 392.83132758119746]
, [187.95168661735607, 171.42160237840375]
, [65.74125171689992, 119.84469232468986]
, [51.92893791762987, 441.92381043665307]
, [40.003883351169335, 494.00466314439075]]
var x
var y
var width = 500
var perceptrion


function setup() {
	
    createCanvas(500, 500);

    // create answer
     for(var i = 0; i < 30;i++){
        if(answer[i][1] >answer[i][0]){
            fill(0)
        }
        else{
            fill(255)
        }
        circle(answer[i][0],answer[i][1],10)
    }
    
    line(0,0,500,500)

    

    j = createP("hello world")
    perceptrion = new Perceptron()
    perceptrion.addInputs(answer)
    perceptrion.initialWeights()
    perceptrion.answer()
    perceptrion.activation()
    perceptrion.updateWeights()


}

function draw(){
    //background(255)
    // for(var i = 0; i < 30;i++){
    //     if(answer[i][1]>answer[i][0]){
    //         fill(0)
    //     }
    //     else{
    //         fill(255)
    //     }
    //     circle(answer[i][0],answer[i][1],10)
    // }

    //line(0,0,500,500)
    // perceptrion.sumWeights()
    // perceptrion.activation()
    // perceptrion.updateWeights()
    
   
}

