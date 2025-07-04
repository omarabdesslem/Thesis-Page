import fs from "fs";
import path from "path";

// Server Component
export default function OverviewPage() {
  const htmlFilePath = path.join(process.cwd(), "app/Code_Pages/VII._Evaluation/07_VII.Evaluation.html");
  const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");

  return (
    <div className="bg-white text-black p-4">
      {/* Navigation Bar */}
      <nav className="mb-6">
        <div className="flex flex-wrap items-center justify-between">
          {/* Back to Models Button */}
          <div className="flex-shrink-0">
            <a
              href="/"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white text-[10px] lg:text-sm py-[2px] px-[6px] lg:py-1.5 lg:px-3 rounded block text-center min-w-[36px]"
            >
              <span className="inline lg:hidden">&larr;</span>
              <span className="hidden lg:inline">&larr; Back to Models</span>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm list-none p-0 m-0 flex-grow">
            <li><a href="/Code_Pages/I._Overview" className="hover:underline text-blue-900 whitespace-nowrap">Overview</a></li>
            <li><a href="/Code_Pages/II._Visualisation" className="hover:underline text-blue-900 whitespace-nowrap">Visualisation</a></li>
            <li><a href="/Code_Pages/III._Data_Correlation" className="hover:underline text-blue-900 whitespace-nowrap">Data Correlation</a></li>
            <li><a href="/Code_Pages/IV._Time_Series_Analysis" className="hover:underline text-blue-900 whitespace-nowrap">Analysis</a></li>
            <li><a href="/Code_Pages/V._Forecast_Models" className="hover:underline text-blue-900 whitespace-nowrap">Forecast Models</a></li>
            <li><a href="/Code_Pages/VI._Testing_Residuals" className="hover:underline text-blue-900 whitespace-nowrap">Residual Testing</a></li>
            <li><a href="/Code_Pages/VII._Evaluation" className="hover:underline text-orange-800 whitespace-nowrap">Evaluation</a></li>
          </ul>

          {/* Right-side placeholder for visual balance */}
          <div className="min-w-[36px] lg:min-w-[180px]" />
        </div>
      </nav>

      {/* HTML Content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
