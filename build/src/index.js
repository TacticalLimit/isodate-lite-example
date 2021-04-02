"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line node/no-extraneous-import
const isodate_lite_1 = require("@tactical/isodate-lite");
const exampleDateObject = {
    name: 'Eris',
    age: 23,
    weapons: ['kallisti'],
    runDate: new Date(),
};
const exampleISOStringObject = {
    name: 'Bob',
    age: 42,
    weapons: ['pipe'],
    runDate: '2021-02-14T09:02:10.232Z',
};
function main() {
    const toStringExample = isodate_lite_1.convertDatesToISOStrings(exampleDateObject);
    console.log('To string example:', toStringExample);
    const toDateExample = isodate_lite_1.convertISOStringsToDates(exampleISOStringObject);
    console.log('To date example:', toDateExample);
}
main();
//# sourceMappingURL=index.js.map