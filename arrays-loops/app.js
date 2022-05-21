 var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computer = "computer"  
        for (var i = 0; i < officeItems.length; i++){
            if(computer[i] === 4){
                i++;
            }
        }
          console.log ('there are 4 computers');

          var peopleWhoWantToSeeMadMaxFuryRoad = [
            {
              name: "Mike",
              age: 12,
              gender: "male"
            },{
              name: "Madeline",
              age: 80,
              gender: "female"
            },{
              name: "Cheryl",
              age: 22,
              gender: "female"
            },{
              name: "Sam",
              age: 30,
              gender: "male"
            },{
              name: "Suzy",
              age: 4,
              gender: "female"
            }
          ]

    for (var i = 0; peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) { 
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough"); 
        }       else { 
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough");
        }
    }