    import {create} from "zustand";

    interface MobileMenuStore {
        isMobileMenuOpen: boolean,
        toggleMobileMenu: ()=> void
    }

    export const useMobileMenu = create<MobileMenuStore>((set)=> ({
        isMobileMenuOpen: false,
        toggleMobileMenu: ()=> set((state)=>({isMobileMenuOpen: !state.isMobileMenuOpen}))
    }))




    /*
    import {create} from zustand;

    interface Mobile{
    toggleMobileMenu: ()=> void,
    isMobileMenuOpen: boolean
    }

    export const useMobileMenu = create((set)=>{
    isMobileMenuOpen: false,
    toggleMobileMenu: ({state(set)=> {isMobileMenuOpen:false}})
    })


    */