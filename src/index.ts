// eslint-disable-next-line node/no-extraneous-import
import {
  convertDatesToISOStrings,
  convertISOStringsToDates,
} from '@tactical/isodate-lite';

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
  const toStringExample = convertDatesToISOStrings(exampleDateObject);
  console.log('To string example:', toStringExample);
  const toDateExample = convertISOStringsToDates(exampleISOStringObject);
  console.log('To date example:', toDateExample);
}

main();
