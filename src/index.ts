import express from "express"
import { connectDb} from "./database/database"
import foodCategoryRouter from "./Router/foodCategory.router"
import foodRouter from "./Router/food.router"

const app = express()

const port = 4201

app.use(express.json())


app.use("/", foodCategoryRouter)
app.use("/food", foodRouter)

app.listen(port, async()=>{
    await connectDb()
    console.log(`http://localhost:${port}`);
    
})