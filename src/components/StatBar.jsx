export default function StatBar({ stat, value }) {
  return (
    <div className="my-2">
      <strong>{stat}:</strong>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${value / 2}%` }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
