import { useTranslation } from "react-i18next";


export default function NeedAnalysis({path}) {
  const { t } = useTranslation();

  return (

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <ul style={{ width: "40%" }}>
          <li>{t(path + "analysis.first.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(path + "analysis.first.solution")}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <ul style={{ width: "40%" }}>
          <li>{t(path + "analysis.second.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(path + "analysis.second.solution")}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <ul style={{ width: "40%" }}>
          <li>{t(path + "analysis.third.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(path + "analysis.third.solution")}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <ul style={{ width: "40%" }}>
          <li>{t(path + "analysis.fourth.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(path + "analysis.fourth.solution")}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <ul style={{ width: "40%" }}>
          <li>{t(path + "analysis.fifth.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(path + "analysis.fifth.solution")}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <ul style={{ width: "40%" }}>
          <li>{t(path + "analysis.sixth.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(path + "analysis.sixth.solution")}
        </div>
      </div>
    </div>
  );
}
