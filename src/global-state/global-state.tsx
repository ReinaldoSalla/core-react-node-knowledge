// import React, { createContext} from 'react';

// const SidebarState = createContext<any>(null);
// const SidebarDispatch = createContext<any>(null);
// const SearchState = createContext<any>(null);
// const SearchDispatch = createContext<any>(null);

// const toggleSidebar = (state) => {
//   if (isSearchVisible) {
//     setIsSearchVisible(false);
//   }
//   if (!isSidebarVisible) {
//     document.body.style.overflowY = 'hidden';
//     if (!isDeviceMobileOrTablet) {
//       document.body.style.width = 'calc(100% - 17px)';
//     }
//   } else {
//     document.body.style.overflowY = 'auto';
//     document.body.style.width = '100%';
//   }
//   setIsSidebarVisible(!isSidebarVisible);
// };  
// }

// const sidebarReducer = (state, action) => {
//   switch (action.type) {
//     case 'TOGGLE_SIDEBAR':
//       return toggleSidebar(state);
//     default:
//       throw new Error(`Action type${action.type} is undefined`);
//   }
// }

// const Provider = ({ children }) => {
//   const [sidebarState, sidebarDispatch] = useReducer(sidebarReducer, { isSidebarActive: false});
//   const [searchState, searchDispatch] = useReducer(searchReducer, { isSearchActive: false });
//   return (
//     <SidebarState.Provider value={false}>
//       <SidebarDispatch.Provider value={sidebarDispatch}>
//         <SearchState.Provider value={false}>
//           <SearchDispatch.Provider value={searchDispatch}>
//             {children}
//           </SearchDispatch.Provider>
//         </SearchState.Provider>
//       </SidebarDispatch.Provider>
//     </SidebarState.Provider>
//   );
// };

export default 0;