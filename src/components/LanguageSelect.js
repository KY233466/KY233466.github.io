import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocaleContext from "./LocaleContext";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { locale } = useContext(LocaleContext);
  const [age, setAge] = useState(locale === "en" ? 10 : 20);
    const { t } = useTranslation();

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(
      "////////////////////////////////////////////////////////////////"
    );
    changeLocale(event.target.value === 10 ? "en" : "cn");
  };

  console.log(locale);

  function changeLocale(l) {
    console.log(l, locale);
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <Box
      sx={{
        minWidth: 120,
        padding: "10px",
        position: "absolute",
        right: "30px",
        top: "30px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{ backgroundColor: "white" }}
        >
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>中文</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
