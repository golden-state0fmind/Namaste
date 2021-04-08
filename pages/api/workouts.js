// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import backExcercise from "./backExcercise.json"

export default function workouts (req, res){
  res.statusCode = 200
  res.json(backExcercise)
}
