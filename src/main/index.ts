import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    hello: 'World 2'
  });
});

app.listen(8080, () => {
  console.log('server started at 8080');
});

export class Math {
  sum (num1: number, num2: number): number {
    return num1 + num2;
  }

  sub (num1: number, num2: number): number {
    return num1 - num2;
  }
}
