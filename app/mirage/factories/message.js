import Mirage, {faker} from 'ember-cli-mirage';


export default Mirage.Factory.extend({
  message: "Learn Ember",
  speaker: "Pia",
  timestamp: "2015-12-07 14:14",
  room: "ember"
});


// export default Ember.Route.extend({
//     model() {
//         let messages = [
//             {
//                 message: "Learn Ember",
//                 speaker: "Pia",
//                 timestamp: "2015-12-07 14:14",
//                 room: "ember",
//             },
//             {
//                 message: "Solve World Hunger",
//                 speaker: "Tora",
//                 timestamp: "2020-12-12 07:45",
//                 room: "test",
//             },
//             {
//                 message: "Hur testar jag Ember?",
//                 speaker: "Tora",
//                 timestamp: "2020-12-12 07:45",
//                 room: "ember",
//             },
//             {
//               message: "Donut",
//               speaker: "Anna",
//               timestamp: "2020-12-12 07:45",
//               room: "test",
//             },
//             {
//               message: "Läs på Internet vettja!",
//               speaker: "Anna",
//               timestamp: "2020-12-12 07:45",
//               room: "ember",
//             }
//         ];
//         return messages;
//     }
// });
