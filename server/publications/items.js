// Meteor.publishComposite("items", function() {
//   return {
//     find: function() {
//       return Items.find({});
//     }
//     // ,
//     // children: [
//     //   {
//     //     find: function(item) {
//     //       return [];
//     //     }
//     //   }
//     // ]
//   }
// });

Meteor.publish("items", function() {
  // if(Items) 
    return Items.find({});
  // else{
  //   this.ready();
  // }
});

