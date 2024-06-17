// // import { HTTPClient } from '../../../libs/api/src';

// import { MemoryRouter } from 'react-router-dom';

// // const APP_FONTS_URL = import.meta.env.VITE_APP_FONTS_URL;
// const APP_FONT = import.meta.env.VITE_APP_FONT;
// // const APP_LOCALE = import.meta.env.VITE_APP_LOCALE;
// // const APP_I18N_URL = import.meta.env.VITE_APP_I18N_URL;
// // const APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
// // const APP_API_VERSION_PATH = import.meta.env.VITE_APP_API_VERSION_PATH;
// // const APP_THEME = import.meta.env.VITE_APP_THEME;

// // const httpClient = new HTTPClient(APP_BACKEND_URL, APP_API_VERSION_PATH);

// describe('Todos page', () => {
//   beforeAll(() => {
//     // jest.spyOn(window, 'FontFace', 'new').mockImplementation(() => {});
//     // global.FontFace = jest.fn(() => ({
//     //   // readyState: 0,
//     //   new: jest.fn(),
//     // }));
//     // declare var FontFace: {
//     //   prototype: FontFace;
//     //   new(family: string, source: string | BinaryData, descriptors?: FontFaceDescriptors): FontFace;
//     // };
//   });

//   it('should render Todos page and display todos correctly', () => {
//     // render(<ListTodo />);

//     const value = {
//       fontFamily: APP_FONT,
//       setFontFamily: (font: string) => null,
//     };

//     render(
//       <MemoryRouter>
//         <FontsContext.Provider value={value}>HELLO</FontsContext.Provider>
//         {/* <I18NProvider
//             locale={APP_LOCALE}
//             urlApp={APP_I18N_URL}
//             folderPath="/translations/"
//           >
//             <APIProvider httpClient={httpClient}>
//               <ThemeProvider theme={APP_THEME}>
//                 <App ToastContainer={ToastContainer} />
//                 <ListTodo />
//               </ThemeProvider>
//             </APIProvider>
//           </I18NProvider> */}
//       </MemoryRouter>,
//     );
//     // screen.debug();
//     // const element = screen.getByRole('heading', {
//     //   name: /Get Things Done !/i,
//     //   level: 1,
//     // });
//     // expect(element).toBeInTheDocument();
//   });
// });
