import { faker } from '@faker-js/faker'
import fs from 'fs';

function fakeNames(Numberoftimes){
  let string = ""
    for(let i=0; i< Numberoftimes; i++){
      string += (faker.name.firstName() + "\n")
    }
  return string
}

const names = fakeNames(1000)

fs.writeFile("NodejsProject1/names.txt"   , names, err => {
    if (err) {
      console.error("error")
    } else (console.log("The process has ended succesfully"))
  })
