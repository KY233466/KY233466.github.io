import { useTranslation } from "react-i18next";

export default function NeedAnalysis() {
  const IFpath = "ZOOX.InitialFeature.";
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
          <li>{t(IFpath + "analysis.first.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(IFpath + "analysis.first.solution")}
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
          <li>{t(IFpath + "analysis.second.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(IFpath + "analysis.second.solution")}
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
          <li>{t(IFpath + "analysis.third.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(IFpath + "analysis.third.solution")}
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
          <li>{t(IFpath + "analysis.fourth.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(IFpath + "analysis.fourth.solution")}
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
          <li>{t(IFpath + "analysis.fifth.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(IFpath + "analysis.fifth.solution")}
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
          <li>{t(IFpath + "analysis.sixth.cause")}</li>
        </ul>

        <div style={{ width: "10%", textAlign: "center" }}>➡</div>

        <div style={{ width: "40%" }}>
          {t(IFpath + "analysis.sixth.solution")}
        </div>
      </div>
    </div>
  );
}
