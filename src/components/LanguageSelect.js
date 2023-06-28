import { useContext, useState } from "react";
import LocaleContext from "./LocaleContext";
import i18n from "../i18n";
import InputLabel from "@mui/material/InputLabel";

export default function LanguageSelect({newStyle}) {
  const { locale } = useContext(LocaleContext);
  const [select, setSelect] = useState(locale === "en");

  const changeSelect = (choice) => {
    setSelect(choice === "en");
    if (locale !== choice) {
      i18n.changeLanguage(choice);
    }
  };

  return (
    <button
      title="Language Setting"
      style={{
        padding: "8px",
        position: "absolute",
        right: "30px",
        top: "30px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#484A52",
        borderRadius: "30px",
        alignItems: "center",
        border: "none",
        cursor: "initial",
        ...newStyle,
      }}
    >
      <button
        onClick={(e) => changeSelect("en")}
        style={{
          margin: "0px 5px 0px 5px",
          padding: "8px 15px",
          borderRadius: "18px",
          border: "none",
          color: "white",
          cursor: "pointer",
          ...(select
            ? { backgroundColor: "#A88FD0", color: "black" }
            : { backgroundColor: "transparent", color: "white" }),
        }}
      >
        English
      </button>
      <button
        onClick={(e) => changeSelect("cn")}
        style={{
          margin: "0px 5px 0px 5px",
          padding: "8px 15px",
          borderRadius: "18px",
          border: "none",
          color: "white",
          cursor: "pointer",
          ...(!select
            ? { backgroundColor: "#A88FD0", color: "black" }
            : { backgroundColor: "transparent", color: "white" }),
        }}
      >
        中文
      </button>
    </button>
    // <Box
    //   sx={{
    //     minWidth: 120,
    //     padding: "10px",
    //     position: "absolute",
    //     right: "30px",
    //     top: "30px",
    //   }}
    // >
    //   <FormControl fullWidth>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={age}
    //       label="Age"
    //       onChange={handleChange}
    //       style={{ backgroundColor: "white" }}
    //     >
    //       <MenuItem value={10}>English</MenuItem>
    //       <MenuItem value={20}>中文</MenuItem>
    //     </Select>
    //   </FormControl>
    // </Box>
  );
}
