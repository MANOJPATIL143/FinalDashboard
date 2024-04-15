import React, { useEffect, useState, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Button, Modal, Card } from "react-bootstrap"; // import Button and Modal from react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoard.css";
import OnGoingProjects from "./OnGoingProjects";

function DashBoard(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  useEffect(() => {
    let root = am5.Root.new("chartdiv1");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        category: "Maharastra",
        value1: 15000,
        value2: 58081,
      },
      {
        category: "Gujrat",
        value1: 14000,
        value2: 18800,
      },
      {
        category: "Bihar",
        value1: 85500,
        value2: 123,
      },
      {
        category: "UP",
        value1: 12000,
        value2: 18200,
      },
      {
        category: "Maharastra",
        value1: 15000,
        value2: 58081,
      },
      {
        category: "Gujrat",
        value1: 14000,
        value2: 18800,
      },
      {
        category: "Bihar",
        value1: 85500,
        value2: 123,
      },
      {
        category: "UP",
        value1: 12000,
        value2: 18200,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category",
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category",
      })
    );
    series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        category: "Maharastra",
        value1: 15000,
        value2: 58081,
      },
      {
        category: "Gujrat",
        value1: 14000,
        value2: 18800,
      },
      {
        category: "Bihar",
        value1: 85500,
        value2: 123,
      },
      {
        category: "UP",
        value1: 12000,
        value2: 18200,
      },
      {
        category: "Maharastra",
        value1: 15000,
        value2: 58081,
      },
      {
        category: "Gujrat",
        value1: 14000,
        value2: 18800,
      },
      {
        category: "Bihar",
        value1: 85500,
        value2: 123,
      },
      {
        category: "UP",
        value1: 12000,
        value2: 18200,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category",
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category",
      })
    );
    series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    let root = am5.Root.new("chartdiv2");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        category: "Maharastra",
        value1: 158000,
        value2: 58081,
      },
      {
        category: "Gujrat",
        value1: 14000,
        value2: 18800,
      },
      {
        category: "Bihar",
        value1: 85500,
        value2: 123,
      },
      {
        category: "UP",
        value1: 12000,
        value2: 18200,
      },
      {
        category: "Maharastra",
        value1: 25000,
        value2: 95081,
      },
      {
        category: "Gujrat",
        value1: 145000,
        value2: 188800,
      },
      {
        category: "Bihar",
        value1: 85500,
        value2: 12883,
      },
      {
        category: "UP",
        value1: 120700,
        value2: 182050,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category",
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category",
      })
    );
    series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  const root = useRef(null);

  useEffect(() => {
    const chartDiv = document.getElementById("k");

    if (chartDiv) {
      if (!root.current) {
        root.current = am5.Root.new("k");
        root.current.setThemes([am5themes_Animated.new(root.current)]);
      }

      const chart = root.current.container.children.push(
        am5percent.PieChart.new(root.current, {
          radius: am5.percent(90),
          innerRadius: am5.percent(50),
          layout: root.current.horizontalLayout,
        })
      );

      const series = chart.series.push(
        am5percent.PieSeries.new(root.current, {
          name: "Series",
          valueField: "sales",
          categoryField: "country",
        })
      );

      series.data.setAll([
        {
          country: "Lithuania",
          sales: 501.9,
        },
        {
          country: "Czechia",
          sales: 301.9,
        },
        {
          country: "Ireland",
          sales: 201.1,
        },
        {
          country: "Germany",
          sales: 165.8,
        },
        {
          country: "Australia",
          sales: 139.9,
        },
        {
          country: "Austria",
          sales: 128.3,
        },
        {
          country: "UK",
          sales: 99,
        },
        {
          country: "Belgium",
          sales: 60,
        },
        {
          country: "The Netherlands",
          sales: 50,
        },
      ]);

      series.labels.template.set("visible", false);
      series.ticks.template.set("visible", false);

      series.slices.template.set("strokeOpacity", 0);
      series.slices.template.set(
        "fillGradient",
        am5.RadialGradient.new(root.current, {
          stops: [
            {
              brighten: -0.8,
            },
            {
              brighten: -0.8,
            },
            {
              brightern: -0.5,
            },
            {
              brighten: 0,
            },
            {
              brighten: -0.5,
            },
          ],
        })
      );

      const legend = chart.children.push(
        am5.Legend.new(root.current, {
          centerY: am5.percent(50),
          y: am5.percent(50),
          layout: root.current.verticalLayout,
        })
      );

      legend.valueLabels.template.setAll({ textAlign: "right" });
      legend.labels.template.setAll({
        maxWidth: 140,
        width: 140,
        oversizedBehavior: "wrap",
      });

      legend.data.setAll(series.dataItems);

      series.appear(1000, 100);
    }
  }, []);

  return (
    <>
      <div>
        <div className="card3">
          <Card
            className="cardHeight"
            style={{ height: `270px`, width: "100%", margin: `15px` }}
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
                      className="fa fa-car"
                      aria-hidden="true"
                      style={{ color: "white", fontSize: "40px" }}
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
                  bottom: "0",
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
          style={{ height: `270px`, width: "100%", margin: `15px` }}
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
                    style={{ color: "white", fontSize: "40px" }}
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
                bottom: "0",
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
          style={{ height: `270px`, width: "100%", margin: `15px` }}
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
                    style={{ color: "white", fontSize: "35px" }}
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
                bottom: "0",
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
        <div id="chartdiv1" style={{ width: "100%", height: "280px" }}></div>
      </div>
      <div className="graph">
        <div id="chartdiv" style={{ width: "400px", height: "350px" }}></div>
      </div>
      <div className="graph2">
        <div id="chartdiv2" style={{ width: "400px", height: "350px" }}></div>
      </div>
      <div className="graph3">
        <div id="k" style={{ width: "100%", height: "400px" }}></div>
      </div>
    </>
  );
}

export default DashBoard;
