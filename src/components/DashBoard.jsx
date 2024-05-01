import React, { useEffect, useState, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Button, Modal, Card } from "react-bootstrap"; // import Button and Modal from react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoard.css";
import OnGoingProjects from "./OnGoingProjects";

function DashBoard() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const chartRef = useRef(null);

  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv1", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "US",
        visits: 3025,
      },
      {
        country: "Chi",
        visits: 1882,
      },
      {
        country: "Grm",
        visits: 1322,
      },
      {
        country: "UK",
        visits: 1122,
      },
      {
        country: "Ind",
        visits: 984,
      },
    ];

    prepareParetoData();

    function prepareParetoData() {
      let total = 0;

      for (let i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        total += value;
      }

      let sum = 0;
      for (let i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        sum += value;
        chart.data[i].pareto = (sum / total) * 100;
      }
    }

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 0;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.tooltip.fontSize = -0.1;
    categoryAxis.renderer.labels.template.rotation = 300;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.labels.template.fontSize = 8;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 40;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.labels.template.fontSize = 10;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.tooltip.fontSize = -0.1;
    series.columns.template.strokeWidth = -0.01;
    series.tooltip.fontSize = -0.1;
    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 50;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // paretoValueAxis.renderer.opposite = true;
    // paretoValueAxis.min = 0;
    // paretoValueAxis.max = 100;
    // paretoValueAxis.strictMinMax = true;
    // paretoValueAxis.renderer.grid.template.disabled = true;
    // paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
    // paretoValueAxis.numberFormatter.numberFormat = "#'%'";
    // paretoValueAxis.cursorTooltipEnabled = false;

    // let paretoSeries = chart.series.push(new am4charts.LineSeries());
    // paretoSeries.dataFields.valueY = "pareto";
    // paretoSeries.dataFields.categoryX = "country";
    // paretoSeries.yAxis = paretoValueAxis;
    // paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]";
    // paretoSeries.bullets.push(new am4charts.CircleBullet());
    // paretoSeries.strokeWidth = 2;
    // paretoSeries.stroke = new am4core.InterfaceColorSet().getFor(
    //   "alternativeBackground"
    // );
    // paretoSeries.strokeOpacity = 0.5;

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.tooltip.fontSize = -0.1;

    if (chart.logo) {
      chart.logo.disabled = true;
    }

    return () => {
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(chartRef.current, am4charts.XYChart3D);
    chart.paddingBottom = 20;
    chart.angle = 35;

    // Add data
    chart.data = [
      {
        country: "India",
        visits: 1882,
      },
      {
        country: "Japan",
        visits: 1882,
      },
      {
        country: "Germany",
        visits: 1882,
      },
      {
        country: "UK",
        visits: 1882,
      },
      {
        country: "France",
        visits: 1382,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 0;
    categoryAxis.renderer.labels.template.rotation = 500;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";

    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -50;
    labelTemplate.horizontalCenter = "right";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 0;
    labelTemplate.inside = false;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    let series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";

    let columnTemplate = series.columns.template;
    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    if (chart.logo) {
      chart.logo.disabled = true;
    }

    return () => {
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv2", am4charts.XYChart);

    // chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "US",
        visits: 33,
      },
      {
        country: "Chi",
        visits: 22,
      },
      {
        country: "Grm",
        visits: 20,
      },
      {
        country: "UK",
        visits: 11,
      },
      {
        country: "Ind",
        visits: 9,
      },
    ];

    prepareParetoData();

    function prepareParetoData() {
      let total = 0;

      for (let i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        total += value;
      }

      let sum = 0;
      for (let i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        sum += value;
        chart.data[i].pareto = (sum / total) * 100;
      }
    }

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.tooltip.fontSize = -0.1;
    categoryAxis.renderer.labels.template.rotation = 300;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.labels.template.fontSize = 10;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 40;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.labels.template.fontSize = 11;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.tooltip.fontSize = -0.1;
    series.columns.template.strokeWidth = -0.01;
    series.tooltip.fontSize = -0.1;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 50;
    series.columns.template.column.cornerRadiusTopRight = 50;
    series.columns.template.column.fillOpacity = 500;

    // Set up colors
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Add color set
    chart.colors.list = [
      am4core.color("#daf7a6"),
      am4core.color("#900c3f"),
      am4core.color("#93e8e4"),
      am4core.color("#7c2aca"),
      am4core.color("#C70039"),
    ];

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 50;
    hoverState.properties.cornerRadiusTopRight = 50;
    hoverState.properties.fillOpacity = 10;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // paretoValueAxis.renderer.opposite = true;
    // paretoValueAxis.min = 0;
    // paretoValueAxis.max = 100;
    // paretoValueAxis.strictMinMax = true;
    // paretoValueAxis.renderer.grid.template.disabled = true;
    // paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
    // paretoValueAxis.numberFormatter.numberFormat = "#'%'";
    // paretoValueAxis.cursorTooltipEnabled = false;

    // let paretoSeries = chart.series.push(new am4charts.LineSeries());
    // paretoSeries.dataFields.valueY = "pareto";
    // paretoSeries.dataFields.categoryX = "country";
    // paretoSeries.yAxis = paretoValueAxis;
    // paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]";
    // paretoSeries.bullets.push(new am4charts.CircleBullet());
    // paretoSeries.strokeWidth = 2;
    // paretoSeries.stroke = new am4core.InterfaceColorSet().getFor(
    //   "alternativeBackground"
    // );
    // paretoSeries.strokeOpacity = 0.5;

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.tooltip.fontSize = -0.1;

    if (chart.logo) {
      chart.logo.disabled = true;
    }

    return () => {
      chart.dispose();
    };
  }, []);
  const root = useRef(null);

  useEffect(() => {
    let chart = am4core.create("k", am4charts.XYChart3D);

    chart.data = [
      {
        country: "USA",
        visits: 4025,
        color: "#a33594",
      },
      {
        country: "China",
        visits: 1882,
        color: "#FF6600",
      },
      {
        country: "Japan",
        visits: 1809,
        color: "#FF9E01",
      },
      {
        country: "Germany",
        visits: 1322,
        color: "#FCD202",
      },
      {
        country: "UK",
        visits: 1122,
        color: "#F8FF01",
      },
      {
        country: "France",
        visits: 1114,
        color: "#B0DE09",
      },
      {
        country: "India",
        visits: 984,
        color: "#04D215",
      },
      {
        country: "Spain",
        visits: 711,
        color: "#0D8ECF",
      },
      {
        country: "Netherlands",
        visits: 665,
        color: "#0D52D1",
      },
      {
        country: "Russia",
        visits: 3850,
        color: "#530CD0",
      },
      {
        country: "South Korea",
        visits: 4453,
        color: "#8A0CCF",
      },
      {
        country: "Canada",
        visits: 4451,
        color: "#CD0D74",
      },
      {
        country: "Brazil",
        visits: 3955,
        color: "#754DEB",
      },
      {
        country: "Italy",
        visits: 3846,
        color: "#DDDDDD",
      },
      {
        country: "Taiwan",
        visits: 3384,
        color: "#333333",
      },
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 0;
    categoryAxis.renderer.labels.template.rotation = 300;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = false;
    valueAxis.tooltip.disabled = false;

    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.column3D.stroke = am4core.color("");
    series.columns.template.column3D.strokeOpacity = -100;
    series.columns.template.column3D.columnWidth = -15; // Adjust the negative value to decrease width

    chart.cursor = new am4charts.XYCursor();
    chart.exporting.menu = new am4core.ExportMenu();

    if (chart.logo) {
      chart.logo.disabled = true;
    }

    return () => {
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("piechart2", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 90; // this creates initial fade-in

    chart.legend = new am4charts.Legend();
    chart.legend.disabled = false;
    chart.legend.position = "right";
    chart.legend.useDefaultMarker = true;
    chart.legend.markers.template.width = 15; // Adjust marker width
    chart.legend.markers.template.height = 15; // Adjust marker height
    chart.legend.markers.template.type = "circle"; // Set marker type to circle

    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
        color: am4core.color("#ffc433"),
      },
      {
        country: "Czech Republic",
        litres: 301.9,
        color: am4core.color("#f24728"),
      },
      {
        country: "Ireland",
        litres: 201.1,
        color: am4core.color("#c70039"), // green color
      },
      {
        country: "Germany",
        litres: 165.8,
        color: am4core.color("#900c3f"),
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series._labels.template.disabled = true;
    series.slices.template.propertyFields.fill = "color"; // set the fill color of all slices
    series.slices.template.stroke = am4core.color("#fff"); // add stroke to slices for better visibility
    series.slices.template.strokeWidth = 0; // set stroke width

    if (chart.logo) {
      chart.logo.disabled = true;
    }

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <div>
        <div className="card3">
          <Card
            className="cardHeight"
            style={{
              height: `270px`,
              width: "100%",
              margin: `15px`,
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", // Add shadow here
            }}
          >
            <Card.Body>
              <table>
                <tr>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#4680ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-25px",
                      left: "5%",
                    }}
                  >
                    <i
                      class="fa fa-id-card"
                      aria-hidden="true"
                      style={{ color: "white", fontSize: "25px" }}
                    ></i>
                  </div>
                  <p
                    style={{
                      color: "#4680ff",
                      fontSize: "medium",
                      marginRight: "-18%",
                      fontWeight: "600",
                      fontSize: "1.1em",
                    }}
                  >
                    Aplication Status
                  </p>
                </tr>
                <tr>
                  <td>Submission To Morth</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>Approved By Morth</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>MoU Signed By Morth</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>Fund Disbursal</td>
                  <td>33</td>
                </tr>
              </table>

              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "2%",
                  backgroundColor: " white",
                  opacity: " 0.5",
                }}
                onClick={openModal}
              >
                <i
                  class="fa fa-exclamation-triangle"
                  aria-hidden="true"
                  style={{ marginRight: "5px", color: "#4680ff" }}
                />
                view all
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <OnGoingProjects />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="card2">
        <Card
          className="cardHeight"
          style={{
            height: `270px`,
            width: "100%",
            margin: `15px`,
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", // Add shadow here
          }}
        >
          <Card.Body>
            <table>
              <tr>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#93BE52",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "5px",
                    position: "absolute",
                    top: "-25px",
                    left: "5%",
                  }}
                >
                  <i
                    className="fa fa-car"
                    aria-hidden="true"
                    style={{ color: "white", fontSize: "30px" }}
                  ></i>
                </div>
                <p
                  style={{
                    color: "#93BE52",
                    fontSize: "medium",
                    marginRight: "-18%",
                    fontWeight: "600",
                    fontSize: "1.1em",
                  }}
                >
                  Ongoing Projects
                </p>
              </tr>
              <tr>
                <td>Initail Fund Release</td>
                <td>33</td>
              </tr>
              <tr>
                <td>IA on Boarding</td>
                <td>22</td>
              </tr>
              <tr>
                <td>Monitoring Center Establi..</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Monitoring Center Go</td>
                <td>11</td>
              </tr>
            </table>

            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                display: "flex",
                alignItems: "center",
                position: "absolute",
                bottom: "2%",
                backgroundColor: " white",
                opacity: " 0.5",
              }}
              onClick={openModal}
            >
              <i
                class="fa fa-exclamation-triangle"
                aria-hidden="true"
                style={{ marginRight: "5px", color: "#93BE52", bottom: "0" }}
              />
              view all
            </Button>
          </Card.Body>
        </Card>
      </div>
      <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {OnGoingProjects.calling ? <OnGoingProjects /> : "No data found"}
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="card4">
        <Card
          className="cardHeight"
          style={{
            height: `270px`,
            width: "100%",
            margin: `15px`,
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", // Add shadow here
          }}
        >
          <Card.Body>
            <table>
              <tr>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#FFB64D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "5px",
                    position: "absolute",
                    top: "-25px",
                    left: "5%",
                  }}
                >
                  <i
                    className="fas fa-chart-pie"
                    aria-hidden="true"
                    style={{ color: "white", fontSize: "30px" }}
                  ></i>
                </div>
                <p
                  style={{
                    color: "orange",
                    fontSize: "medium",
                    marginRight: "-39%",
                    fontWeight: "600",
                    fontSize: "1.1em",
                  }}
                >
                  Total Fund Status
                </p>
              </tr>
              <tr>
                <td>Estimated Project Cost</td>
                <td>463.90</td>
              </tr>
              <tr>
                <td>Center's Shere</td>
                <td>332.24</td>
              </tr>
              <tr>
                <td>Amount From Center</td>
                <td>117.5</td>
              </tr>
            </table>

            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                display: "flex",
                alignItems: "end",
                position: "absolute",
                bottom: "2%",
                backgroundColor: " white",
                opacity: " 0.5",
              }}
              onClick={openModal}
            >
              <i
                class="fa fa-exclamation-triangle"
                aria-hidden="true"
                style={{ marginRight: "5px", color: "orange" }}
              />
              view all
            </Button>
          </Card.Body>
        </Card>
      </div>
      <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="card5">
        <Card
          className="cardHeight"
          style={{
            height: `270px`,
            width: "100%",
            margin: `15px`,
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", // Add shadow here
          }}
        >
          <Card.Body>
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#4680ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                position: "absolute",
                top: "-25px",
                left: "5%",
              }}
            >
              <i
                className="fa fa-microchip"
                aria-hidden="true"
                style={{ color: "white", fontSize: "30px" }}
              ></i>
            </div>
            <p
              style={{
                color: "#4680ff",
                fontSize: "medium",
                marginRight: "0%",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              States Vehicles
            </p>
            <div
              id="chartdiv1"
              style={{
                width: "100%",
                height: "230px",
                position: "absolute",
                top: "42px",
                left: "0%",
              }}
            ></div>
          </Card.Body>
        </Card>
      </div>

      <div className="graph">
        <h6
          style={{
            marginBottom: "0",
            color: "#505458",
            fontSize: "14px",
            fontWeight: "600",
            display: "inline-block",
            marginRight: "10px",
            lineHeight: "1.4",
          }}
        >
          Application Status
        </h6>
        <div
          id="chartdiv1"
          style={{
            width: "100%",
            height: "293px",
            position: "absolute",
            top: "10px",
            left: "0%",
            fontSize: "70%",
          }}
          ref={chartRef}
        />
      </div>
      <div className="graph2">
        <h6
          style={{
            marginBottom: "0",
            color: "#505458",
            fontSize: "14px",
            fontWeight: "600",
            display: "inline-block",
            marginRight: "10px",
            lineHeight: "1.4",
          }}
        >
          On Going Projects
        </h6>
        <div
          id="chartdiv2"
          style={{
            width: "400px",
            height: "5%",
            width: "80%",
            height: "273px",
            position: "absolute",
            top: "25px",
            left: "10%",
            fontSize: "70%",
          }}
        ></div>
      </div>
      <div className="graph3">
        <p
          style={{
            marginBottom: "0",
            color: "#505458",
            fontSize: "14px",
            fontWeight: "600",
            display: "inline-block",
            marginRight: "10px",
            lineHeight: "1.4",
          }}
        >
          Total Fund Status
        </p>
        <div
          id="k"
          style={{
            width: "90%",
            height: "293px",
            fontSize: "70%",
            position: "absolute",
            top: "10px",
          }}
        ></div>
        <div className="piechart2">
          <p
            style={{
              marginBottom: "0",
              color: "#505458",
              fontSize: "14px",
              fontWeight: "600",
              display: "inline-block",
              marginRight: "10px",
              lineHeight: "1.4",
            }}
          >
            State Fund
          </p>
          <div
            id="piechart2"
            style={{
              width: "80%",
              height: "283px",
              fontSize: "70%",
              position: "absolute",
              top: "20px",
              right: "10%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
