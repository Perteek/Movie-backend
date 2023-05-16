import { configureStore } from "@reduxjs/toolkit";
import {Customreducer} from "../redux/Reducers"

const Store=configureStore({
    reducer:{
        custom:Customreducer
    }
})

export default Store