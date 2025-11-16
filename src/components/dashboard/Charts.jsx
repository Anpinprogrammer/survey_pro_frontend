import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function Charts() {
  const responsesRef = useRef(null);
  const surveysTypeRef = useRef(null);

  const responsesChartInstance = useRef(null);
  const surveysTypeChartInstance = useRef(null);

  useEffect(() => {
    // --- CHART 1: Respuestas por día ---
    const responsesCtx = responsesRef.current.getContext("2d");

    // Destruir si ya existe
    if (responsesChartInstance.current) {
      responsesChartInstance.current.destroy();
    }

    responsesChartInstance.current = new Chart(responsesCtx, {
      type: "line",
      data: {
        labels: ["Lun", "Mar", "Mié", "Jue", "Vie"],
        datasets: [
          {
            label: "Respuestas",
            data: [12, 19, 3, 5, 2],
            borderWidth: 2,
          },
        ],
      },
    });

    // --- CHART 2: Encuestas por tipo ---
    const surveysCtx = surveysTypeRef.current.getContext("2d");

    if (surveysTypeChartInstance.current) {
      surveysTypeChartInstance.current.destroy();
    }

    surveysTypeChartInstance.current = new Chart(surveysCtx, {
      type: "doughnut",
      data: {
        labels: ["Internas", "Externas"],
        datasets: [
          {
            label: "Encuestas",
            data: [60, 40],
            borderWidth: 1,
          },
        ],
      },
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Chart 1 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Respuestas por día</h3>
          <div className="text-sm text-gray-500">Últimos 30 días</div>
        </div>
        <div className="h-64">
          <canvas ref={responsesRef}></canvas>
        </div>
      </div>

      {/* Chart 2 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Encuestas por tipo</h3>
          <div className="text-sm text-gray-500">Distribución actual</div>
        </div>
        <div className="h-64 flex items-center justify-center">
          <canvas ref={surveysTypeRef}></canvas>
        </div>
      </div>
    </div>
  );
}

