
var pestControl = document.pestForm 
pestControl.addEventListener('submit', function(e){
    e.preventDefault()

    var goombaBaddies = pestControl.goombaTotal.value
    var bobombBaddies = pestControl.bobombTotal.value
    var cheepBaddies = pestControl.cheepsTotal.value  
    var pointsTotal = Number(goombaBaddies)+Number(bobombBaddies)+Number(cheepBaddies)
    document.getElementById('captured').textContent = pointsTotal 


    var goombaTotal = pestControl.goombaTotal.value * 5
     var bobombTotal = pestControl.bobombTotal.value * 7
    var cheepTotal = pestControl.cheepsTotal.value *11  
    var totalPoints = Number(goombaTotal)+Number(bobombTotal)+Number(cheepTotal)
    document.getElementById('pointsTotal').textContent = totalPoints


})