export default function handler(req, res) {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    res.status(200).json({ text: 'Hello', numeros });
  }