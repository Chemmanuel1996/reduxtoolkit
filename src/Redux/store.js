import {configureStore } from '@reduxjs/toolkit';
import todostore from './todostore';

export default configureStore({
    reducer :{
        todos: todostore,
    }
})