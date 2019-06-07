// {
//   "name": "page16",
//   "elements": [{
//     "type": "panel",
//     "name": "panel16",
//     "elements": [{
//       "type": "radiogroup",
//       "name": "test1",
//       "title": "Ik steun culturele diversiteit in onze organisatie...",
//       // isRequired: true,
//       "choices": [{
//         value: answers[0][0].number,
//         text: answers[0][0].text,
//         score: answers[0][0].value,
//       }, {
//         value: answers[0][1].number,
//         text: answers[0][1].text,
//         score: answers[0][1].value,
//       }],
//     }, {
//       type: "matrix",
//       name: "test2",
//       title: "Ik steun culturele diversiteit in onze organisatie...",
//       "visibleIf": "{test1} notempty",
//       columns: [{
//         value: 1,
//         text: "Helemaal oneens"
//       }, {
//         value: 2,
//         text: "Oneens"
//       }, {
//         value: 3,
//         text: "Neutraal"
//       }, {
//         value: 4,
//         text: "Eens"
//       }, {
//         value: 5,
//         text: "Helemaal eens"
//       }],
//       rows: [{
//         value: answers[0][0].number,
//         text: answers[0][0].text,
//         score: answers[0][0].value
//       }, {
//         value: answers[0][1].number,
//         text: answers[0][1].text,
//         score: answers[0][1].value
//       }, {
//         value: answers[1][0].number,
//         text: answers[1][0].text,
//         score: answers[1][0].value
//       }, {
//         value: answers[1][1].number,
//         text: answers[1][1].text,
//         score: answers[1][1].value
//       }, {
//         value: answers[2][0].number,
//         text: answers[2][0].text,
//         score: answers[2][0].value
//       }, {
//         value: answers[2][1].number,
//         text: answers[2][1].text,
//         score: answers[2][1].value
//       }]
//     }],
//   }],