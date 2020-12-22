import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";
import createPalette from "@material-ui/core/styles/createPalette";
import defaultMuiTheme from "@material-ui/core/styles/defaultTheme";



const palette = createPalette(
  merge({}, defaultTheme.palette, {
    primary: {
      
      light: '#757ce8',
      main: '#ffab91',
      dark: '#002884',
     
    },
    secondary: {
      main: "#ff7043",
     
    },
  })
);

export  const rawTheme = {
  //...
  overrides: {
    RaSidebar: {
      drawerPaper: {
        backgroundColor:palette.primary.main,
        color: palette.secondary.main,
        height: "100%",
        boxShadow:
          "2px 0px 1px -1px rgba(0,0,0,0.2), 1px 0px 3px 0px rgba(0,0,0,0.1)",

      },
    },
  }
};



//export const theme = createMuiTheme(merge({}, defaultTheme, rawTheme));

export const theme = createMuiTheme(
          
  merge({}, defaultTheme, rawTheme, {
    palette: {
      // Your theme goes here
      // Write the following code to have an orange app bar. We'll explain it later in this article.
      /*primary:{
        main:
      }*/
      
      secondary: {
        main: "#ff7043", // color del header
        contrastText: '#FAF7F7 '
      },
    }
  })
);
