// crear una promesa con error con resolve y rejeact si la variable esta en true esta en error y viceversa

const promesa1 = new Promise((resolve, reject) => {
    a=true
  if (b) {
    resolve('la promesa tiene un error');
  } else {
    reject('se ejecuto con exito');
  }
});