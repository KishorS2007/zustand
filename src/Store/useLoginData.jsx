import { create } from "zustand";

export const useLoginData = create((set)=>({
    Email:"",               // initial state variable
    Password:"",
    SetEmail:(email)=>set({Email:email}),  // setter method
    SetPassword:(password)=>set({Password:password})
}));

// similar to usestate hook