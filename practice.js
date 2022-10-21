const fs = require('fs');
const superagent = require('superagent');

//superagent method
// fs.readFile('./dog.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     supeagent
//       .get('https://dog.ceo/api/breed/' + data + '/images/random')
//       .then((res) => {
//         console.log(res.body.message);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// });

//creating promise
const readPromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(data);
        return;
      }
    });
  });
};

const writePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve();
        return;
      }
    });
  });
};

// readPromise('./dog.txt').then(data=>{
//     console.log(`breed:${data}`);
//     return superagent.get("https://dog.ceo/api/breed/"+data+"/images/random")
// })
// .then(res=>{
//         console.log(res.body.message);
//         return writePromise('dog-img.txt',res.body.message)
// })
// .then(()=>{
//     console.log('dog-img.txt written');
// })
// .catch(err=>{
//     console.log(err);
// })

// readPromise('./dog.txt')
//   .then((data) => {
//     console.log(`breed:${data}`);
//     return supergent.get(
//       'https://dog.ceo/api/breed/' + data + '/images/random'
//     );
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writePromise('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('dog-img.txt written');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

const getDogPic = async () => {
  try {
    const data = await readPromise('dog.txt');
    console.log(`breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writePromise('dog-img.txt', res.body.message);
    console.log('random dog saved!');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2:Dog ready!';
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    await getDogPic().then((x) => {
      console.log(x);
    });

    console.log('3: Will write dog pics!');
  } catch (err) {
    console.log(err);
  }
})();

// console.log('1: Will get dog pics!');
// getDogPic()
//   .then((x) => {
//     console.log(x);
//     console.log('2: Will write dog pics!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });
