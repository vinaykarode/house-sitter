Meteor.startup(function() {
    if(HousesCollection.find().count() === 0){
        var houses = [
            {
                name:'Stephen",
                plants:[
                {
                color:'red',instruction:'3 pots/weeks'
                }
            
                {
                color:'white',instruction:'keep humid'
                }
            
                ]

            }
        ];
            while(houses.length > 0){
            HousesCollection.insert(houses.pop());
        }
    console.log('added fixtures');
    }
});
    